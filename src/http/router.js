require('dotenv').config();

const express = require('express');
const lambdaEvent = require('aws-serverless-express/middleware');
const router = express();
const cors = require('cors');
const LibraryRouter = require('./routes/libraries/router');
const HealthRouter = require('./routes/health/router');
const corsConfig = require('../config/cors');


router.use(cors(corsConfig));
router.use(express.urlencoded({extended: false}));
router.use(express.json());
router.use(lambdaEvent.eventContext());

/**
 * Add PreFlight headers
 */
router.options('*', cors(corsConfig));

router.use('/health', HealthRouter);
router.use('/libraries', LibraryRouter);

module.exports = router;
