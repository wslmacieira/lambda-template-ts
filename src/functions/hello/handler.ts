import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello World!!!',
          input: event,
        },
        null,
        2
      ),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}
