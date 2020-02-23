# Chat Stock Bot
This is a bot using RabbitMQ

## Pre requirements

- Node installed
- Have one RabbitMQ instance create and at least one queue

## Installation Instructions

1. Clone this repository
2. Open the terminal inside the recently cloned repository
3. Create a .env file in the root project folder
4. `npm install`
5. `npm start`

### Environmental Variables

These are the following variables you must configure

```sh
RABBITMQ_URL=amqp://rabbitmqurl
RABBITMQ_QUEUE=queue_name
```

## Usage Instructions

Now your chat app has a bot!
