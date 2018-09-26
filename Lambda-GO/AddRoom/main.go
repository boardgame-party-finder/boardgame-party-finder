package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var data map[string]interface{}

func main() {
	lambda.Start(handleRequest)
}

func handleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	requestBody := request.Body
	data := Lobby{}
	json.Unmarshal([]byte(requestBody), &data)

	result, err := createRoom(data)
	if err != nil {
		apiRespond := events.APIGatewayProxyResponse{Body: "Error in adding item", StatusCode: 502}
		return apiRespond, err
	}
	fmt.Println(result)

	apiRespond := events.APIGatewayProxyResponse{Body: result, StatusCode: 200}
	return apiRespond, nil
}
