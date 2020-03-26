module.exports = {
    QUEUE_URL: process.env.SQS_QUEUE_URL,
    QUEUE_SYNC: process.env.QUEUE_MODE === 'sync',
};