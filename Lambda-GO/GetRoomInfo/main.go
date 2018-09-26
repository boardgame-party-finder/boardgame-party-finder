package main

import (
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var data map[string]interface{}

func main() {
	lambda.Start(handleRequest)
}

func handleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var apiRespond events.APIGatewayProxyResponse
	fmt.Println(request.HTTPMethod)
	roomPK := request.QueryStringParameters["room"]
	result, err := GetRoomInfo(roomPK)
	fmt.Println(result)
	fmt.Println("-----------------------------------------------")
	fmt.Println("Error in function = ", err)
	jsonResult, err := json.Marshal(result)
	if err != nil {
		apiRespond = events.APIGatewayProxyResponse{Body: "failed", StatusCode: 504}
	} else {
		apiRespond = events.APIGatewayProxyResponse{Body: string(jsonResult), StatusCode: 200}
	}
	return apiRespond, err
}
