package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var data map[string]interface{}

func main() {
	lambda.Start(handleRequest)
}

func handleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	roomName := request.QueryStringParameters["room"]
	userInfo := request.QueryStringParameters["user"]

	result, err := leaveRoom(roomName, userInfo)
	fmt.Println(result)
	fmt.Println("-----------------------------------------------")
	fmt.Println("Error in function = ", err)

	apiRespond := events.APIGatewayProxyResponse{Body: result, StatusCode: 200}
	return apiRespond, err
}
