#! /bin/sh

DOCKER_ELASTICMQ_NAME=serverless-journey-elasticmq

docker run --rm -d \
    --name $DOCKER_ELASTICMQ_NAME \
    -p 9324:9324 \
    -v $(pwd)/bin/elastimq.conf:/opt/elasticmq.conf \
    softwaremill/elasticmq

echo 'You can access ElasticMQ at http://localhost:9324'

if [ $? -eq "1" ]; then
  echo 'Docker is not started. Please start Docker and rerun command.'
  exit 1
fi
