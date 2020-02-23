const amqp = require('amqplib');
const axios = require('axios');

const RABBITMQ_URL = process.env.RABBITMQ_URL;
const RABBITMQ_QUEUE = process.env.RABBITMQ_QUEUE;

const handleStock = async () => {
    const conn = await amqp.connect(RABBITMQ_URL);
    const ch = await conn.createChannel();
    ch.assertQueue(RABBITMQ_QUEUE, { durable: false, });
    ch.consume('stock_bot', async ({content}) => {
        const stockCode = content.toString();
        console.log(stockCode);
        const csv = await axios.get(`https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcv&h&e=csv`);
        const close = csv.data.split(/\r?\n/)[1].split(',')[6];
        const botMessage = `${stockCode.toUpperCase()} quote is $${close} per share`;
        const payload = JSON.stringify({
            user: 'Stock Bot',
            message: botMessage,
            channel: 'default'
        });
        ch.sendToQueue(RABBITMQ_QUEUE, Buffer.from(payload));
    }, {
        noAck: true
    });
}
handleStock();