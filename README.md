# Serverless Slack Backend
[![Build Status](https://travis-ci.org/conroywhitney/serverless-slack-backend.svg?branch=master)](https://travis-ci.org/conroywhitney/serverless-slack-backend)

Backend for the [`serverless-slack` project](https://github.com/conroywhitney/serverless-slack).

A [Slack](https://slack.com/) tribute using the [Serverless Framework](https://serverless.com/) and [Amazon Web Services (AWS)](https://aws.amazon.com/), specifically: [IoT](https://aws.amazon.com/iot/), [DynamoDB](https://aws.amazon.com/dynamodb/), [Elasticsearch](https://aws.amazon.com/elasticsearch-service/), [API Gateway](https://aws.amazon.com/api-gateway/), and [Kinesis](https://aws.amazon.com/kinesis/). 

# To Use

```
# Clone this repository
git clone https://github.com/conroywhitney/serverless-slack-backend
# Go into repository
cd serverless-slack-backend
# Install dependencies
yarn
# Deploy the app
sls deploy
# Copy the API Gateway URL to the `.env` file of your `serverless-slack` project
```

## Credits

This project was heavily inspired by [How To Build A Serverless Notification System on AWS](https://serverless.com/blog/serverless-notifications-on-aws/) on the [Serverless Blog](https://serverless.com/blog).

Thanks to the teams at Serverless, AWS, and Slack for their work on their respective projects that make something like this possible. We truly live in exciting times!

## License

See [LICENSE](LICENSE)
