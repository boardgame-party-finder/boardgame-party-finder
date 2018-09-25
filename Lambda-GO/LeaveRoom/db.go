package main

import (
	"fmt"
	"strconv"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func leaveRoom(roomNumber string, user JoinInfo) (string, error) {

	var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))
	var table = "BoardGameDB"
	result := "success"

	key, err := dynamodbattribute.MarshalMap(RoomKey{
		"room",
		roomNumber})
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
						S: aws.String(roomNumber),
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
		if personObj[0].InUsers[i].ID == user.PK {
			fmt.Println("index:", i)
			index = i
		}
	}

	// Remove element in list by index

	remove := "REMOVE #inUsers[" + strconv.Itoa(index) + "]"
	fmt.Println("remove = ", remove)

	input := &dynamodb.UpdateItemInput{
		Key:              key,
		TableName:        aws.String(table),
		UpdateExpression: aws.String(remove),
		ExpressionAttributeNames: map[string]*string{
			"#inUsers": aws.String("inUsers"),
		},

		ReturnValues: aws.String("NONE")}

	_, err = db.UpdateItem(input)

	if err != nil {
		fmt.Println(err)
	}

	return result, err1

}
