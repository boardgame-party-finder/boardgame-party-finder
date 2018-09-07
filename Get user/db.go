package main

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func getUser() ([]User, error) {

	var db = dynamodb.New(session.New(), aws.NewConfig().WithRegion("us-east-2"))
	var table = "BoardGameDB"
	var queryInput = &dynamodb.QueryInput{
		TableName: aws.String(table),
		// IndexName: aws.String(),
		KeyConditions: map[string]*dynamodb.Condition{
			"TbN": {
				ComparisonOperator: aws.String("EQ"),
				AttributeValueList: []*dynamodb.AttributeValue{
					{
						S: aws.String("user"),
					},
				},
			},
		},
	}

	var result, err = db.Query(queryInput)

	user := []User{}
	err = dynamodbattribute.UnmarshalListOfMaps(result.Items, &user)
	if err != nil {
		return nil, err
	}

	return user, nil

}
