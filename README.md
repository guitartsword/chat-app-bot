# Chat Stock Bot
This is a bot using RabbitMQ

## Pre requirements

- Node installed
- Have one RabbitMQ instance create
- RabbitMQ should have a query named: `stock_bot`

## Installation Instructions

1. Clone this repository
2. Open the terminal inside the recently cloned repository
3. Create a .env file in the root project folder
4. `npm install`
5. `npm run dev`

### Environmental Variables

These are the following variables you must configure

```sh
RABBITMQ_URL=amqp://rabbitmqurl
RABBITMQ_QUEUE=queue_name
RABBITMQ_STOCKBOT_QUEUE=stock_queue_name
```

## Usage Instructions

Now your chat app has a bot!

## want to use this bot?

Just send a json with the following parameters

```ts
interface BotContent{
    stockCode: string
    username: string
    channel?: string
}
```