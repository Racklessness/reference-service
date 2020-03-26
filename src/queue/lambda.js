'use strict';

const router = require('./router');

exports.handler = function (event, context) {
    let promisses = [];
    for (const {body} of event.Records) {
        const jobData = JSON.parse(body);
        promisses.push(router.handle(jobData.name, jobData.data || {}));
    }
    return Promise.all(promisses).then(() => {
        console.log('successfully processed everything');
    }).catch((err) => {
        console.log(err);
        console.log('Theres been errors');
    });
};
