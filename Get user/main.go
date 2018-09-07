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

func dummy() {
	fmt.Println("Hello world")
}

func handleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	fmt.Println(request.HTTPMethod)

	result, err := getUser()
	fmt.Println(result)
	fmt.Println("-----------------------------------------------")
	fmt.Println("Error in function = ", err)
	jsonResult, err := json.Marshal(result)
	apiRespond := events.APIGatewayProxyResponse{Body: string(jsonResult), StatusCode: 200}
	return apiRespond, err
}
