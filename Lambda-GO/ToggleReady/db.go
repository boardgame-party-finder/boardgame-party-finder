package main

import (
	"fmt"
	"strconv"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func toggleReady(roomPK string, userPK string, readyStatus string) (string, error) {

	var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))
	var table = "BoardGameDB"
	result := "true"

	ready, errConvert := strconv.ParseBool(readyStatus)
	fmt.Println("Ready = ", ready)
	if errConvert != nil {
		fmt.Println(errConvert)
	}
	key, err := dynamodbattribute.MarshalMap(RoomKey{
		"room",
		roomPK})
	// Find index of element in list inUsers
	var queryInput = &dynamodb.QueryInput{
		TableName: aws.String(table),
		KeyConditions: map[string]*dynamodb.Condition{
			"TbN": {
				ComparisonOperator: aws.String("EQ"),
				AttributeValueList: []*dynamodb.AttributeValue{
					{
						S: aws.String("room"),
					},
				},
			},
			"PK": {
				ComparisonOperator: aws.String("EQ"),
				AttributeValueList: []*dynamodb.AttributeValue{
					{
						S: aws.String(roomPK),
					},
				},
			},
		},
	}

	var resp1, err1 = db.Query(queryInput)
	index := 0

	if err1 != nil {
		fmt.Println(err1)
	}
	personObj := []Lobby{}
	err1 = dynamodbattribute.UnmarshalListOfMaps(resp1.Items, &personObj)

	for i := range personObj[0].InUsers {
		if personObj[0].InUsers[i].ID == userPK {
			fmt.Println("index:", i)
			index = i
		}
	}

	// Remove element in list by index

	remove := "SET #inUsers[" + strconv.Itoa(index) + "].ready = :ready"
	fmt.Println("remove = ", remove)

	input := &dynamodb.UpdateItemInput{
		Key:              key,
		TableName:        aws.String(table),
		UpdateExpression: aws.String(remove),
		ExpressionAttributeNames: map[string]*string{
			"#inUsers": aws.String("inUsers"),
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":ready": {
				BOOL: aws.Bool(ready),
			},
		},

		ReturnValues: aws.String("NONE")}

	_, err = db.UpdateItem(input)

	if err != nil {
		fmt.Println(err)
		result = "false"
	}

	return result, err1

}
