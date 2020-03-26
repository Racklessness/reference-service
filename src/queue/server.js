require('dotenv').config();
const {QUEUE_URL} = require('../config/sqs');
const {Consumer} = require('sqs-consumer');
const {handler} = require('./lambda');

const app = Consumer.create({
    queueUrl: QUEUE_URL,
    batchSize: 5,
    handleMessageBatch: async (messages) => {
        const processedMessages = messages
            .map((item) => {
                return {
                    messageId: item.MessageId,
                    receiptHandle: item.ReceiptHandle,
                    body: item.Body,
                    attributes: item.Attributes,
                    md5OfBody: item.MD5OfBody,
                };
            });
        console.log('new messages arrived ', processedMessages.length);
        await handler({
            Records: processedMessages,
        });
    },
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});
app.on('empty', () => {
    console.error('empty');
});

app.start();