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

	key, err := dynamodbattribute.MarshalMap(RoomKey{
		"room",
		roomNumber})
	fmt.Println("=================================================")
	fmt.Println("Key = ", key)
	userInfo, err := dynamodbattribute.MarshalMap(UserInfo{
		ID:   user.PK,
		Name: user.Name,
	})
	userInfos, err := dynamodbattribute.MarshalList([]UserInfo{
		UserInfo{
			ID:   user.PK,
			Name: user.Name,
		},
	})
	fmt.Println(userInfo)

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
