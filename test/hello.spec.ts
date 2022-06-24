import { APIGatewayProxyEvent } from 'aws-lambda'
import { hello } from '../src/functions'

describe('hello test', () => {
  it('should be return hello world', () => {
    const hello = 'hello world!'
    expect(hello).toEqual('hello world!')
  })

  it('should be return hello world', async () => {
    const event = {
      body: 'Hello',
    } as APIGatewayProxyEvent
    const result = await hello(event)
    expect(result.statusCode).toEqual(200)
    expect(JSON.parse(result.body)).toEqual({ input: { body: 'Hello' }, message: 'Hello World!!!' })
  })
})
