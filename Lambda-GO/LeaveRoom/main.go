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

	roomName := request.QueryStringParameters["room"]
	userInfo := request.Body
	data := JoinInfo{}
	json.Unmarshal([]byte(userInfo), &data)
	result, err := leaveRoom(roomName, data)
	fmt.Println(result)
	fmt.Println("-----------------------------------------------")
	fmt.Println("Error in function = ", err)

	apiRespond := events.APIGatewayProxyResponse{Body: result, StatusCode: 200}
	return apiRespond, err
}
