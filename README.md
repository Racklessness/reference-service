# ExpressJS reference service for deployment in Lambda with API Gateway proxy

> This primary purpose of this reference app is as support to some content about writing cohesive micro-services deployed in Lambda.

### Environment

This app uses `dotenv` to ease up environment management.

In the root you will find a `.env.example` file, containing all the environment variables that the app might need.

Copy this file to `.env`, and change any values there, and the app will use them.

### Local Development

In order to ease up local development, we can run some of the appliances the service uses locally.

In the `/bin` directory, we have created some scripts to ease up starting these services.

Have a look at the scripts in case you want to make any changes. They are very simple. 

You could of course also run these in AWS, and point the service at them.

##### MariaDB
The service uses RDS in AWS, running the MariaDB engine.

To develop locally, we can start a Docker container running MariaDB.

```
./bin/run-mariadb.sh
```

The database runs on port 3307 in order to prevent conflicts with other instances.

The credentials for the database can be found inside the script file, or in `.env.example`

##### ElasticMQ

ElasticMQ is a AWS SQS compatible queue which works in very much the same way as SQS.

It is used locally to prevent us having to call SQS all the time.

For ElasticMQ there is a config file `/bin/elastimq.conf` which contains the queue configs. 

ElasticMQ can also be started from the bin folder
```
 ./bin/run-elasticmq.sh
```

The credentials and queue URL for the default is contained in the `.env.example` file

##### Running the application

To run this service locally
```commandline
yarn install
yarn dev
```
The above command will start the service locally and restart when any files change inside the `/src` directory

To start the HTTP server without reload
```commandline
yarn start:http
```

To start the Queue Consumer server 
```commandline
yarn start:queue
```

##### Deployment

This service was built to run in Lambda, 
and therefor there are some files named `lambda.js`, 
which act as Lambda entry points for the handlers

Checkout the infrastructure repo to see how this function is currently deployed.

##### Contributing

Feel free to fork this and the infrastructure repo if you would like to experiment, 
and feel free to open PRs if you would like to contribute some more stuff to the reference application.
