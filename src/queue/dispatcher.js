const {QUEUE_URL, QUEUE_SYNC} = require('../config/sqs');
const Producer = require('sqs-producer');
const router = require('./router');
const uuid = require('uuid').v4;

// create simple producer
const producer = Producer.create({queueUrl: QUEUE_URL});

async function dispatch(job, data, options = {
    sync: false
}) {
    /**
     * Here is where we will send a message to SQS structured as
     * {
     *     "name": "job name",
     *     "data": {} # Data object passed to function
     * }
     */
    let name = job;
    if (typeof job == 'function') {
        name = job.name;
    }

    /**
     * If the queue is configured as synchronous globally, or the job was dispatched in synchronous mode,
     * launch immediately, and return
     */
    if (QUEUE_SYNC || options.sync) {
        return router.handle(name, data || {});
    }

    return new Promise((resolve) => {
        producer.send({
            id: uuid(),
            body: JSON.stringify({
                name,
                data,
            }),
        }, function(err) {
            if (err) console.log(err);
            console.log('Event Sent to queue');
            resolve();
        });
    });
}

module.exports = {
    dispatch,
};