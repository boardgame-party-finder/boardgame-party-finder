package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func GetRoomInfo(roomNumber string) ([]Lobby, error) {

	var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))
	var table = "BoardGameDB"
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

	if err1 != nil {
		fmt.Println(err1)
	}
	personObj := []Lobby{}
	err1 = dynamodbattribute.UnmarshalListOfMaps(resp1.Items, &personObj)

	return personObj, err1

}
