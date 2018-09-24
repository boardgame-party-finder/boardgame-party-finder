package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func joinRoom(roomNumber string, user JoinInfo) (string, error) {

	var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))
	var table = "BoardGameDB"
	result := "success"
	fmt.Println("Join Room")
	key, err := dynamodbattribute.MarshalMap(RoomKey{
		"room",
		roomNumber})
	fmt.Println("=================================================")
	fmt.Println("Key = ", key)
	userInfo, err := dynamodbattribute.MarshalMap(UserInfo{
		ID:    user.PK,
		Name:  user.Name,
		Ready: false,
	})
	userInfos, err := dynamodbattribute.MarshalList([]UserInfo{
		UserInfo{
			ID:    user.PK,
			Name:  user.Name,
			Ready: false,
		},
	})
	fmt.Println(userInfo)

	dummyUser, err := dynamodbattribute.MarshalList([]UserInfo{
		UserInfo{
			ID:    "dummy",
			Name:  "dummyName",
			Ready: false,
		},
	})

	// Add inUser Attribute if not exist

	update := &dynamodb.UpdateItemInput{
		Key:              key,
		TableName:        aws.String(table),
		UpdateExpression: aws.String("SET inUsers = :p"),
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":p": {L: dummyUser},
		},
		ConditionExpression: aws.String("attribute_not_exists(inUsers)"),
	}

	_, err = db.UpdateItem(update)

	input := &dynamodb.UpdateItemInput{
		Key:              key,
		TableName:        aws.String(table),
		UpdateExpression: aws.String("SET #inUsers = list_append(#inUsers,:userInfo)"),
		ExpressionAttributeNames: map[string]*string{
			"#inUsers": aws.String("inUsers"),
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":userInfo": {L: userInfos},
		},

		// ConditionExpression: aws.String("size(inUsers) < maxU"),
		ReturnValues: aws.String("UPDATED_NEW")}

	_, err = db.UpdateItem(input)
	if err != nil {
		fmt.Println(err.Error())
		return "failed", err
	}

	return result, err

}
