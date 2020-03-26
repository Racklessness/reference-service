'use strict';

/**
 * This file is used when lambda starts up our service.
 *
 * It essentially creates the router,
 * and sets up the Lambda middleware to convert the response to api gateway compatible response.
 */

const awsServerlessExpress = require('aws-serverless-express');
const router = require('./router');

const server = awsServerlessExpress.createServer(router);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
