import AWS from 'aws-sdk'
import vogels from 'vogels-promisified'

import { isDevEnv } from '../utils/env'

if (isDevEnv) { require('dotenv').config() }

const localDynamoDB = () => {
  console.log('vogels', 'localDynamoDB')

  var opts = { endpoint: 'http://localhost:8000', apiVersion: '2012-08-10' }
  vogels.dynamoDriver(new AWS.DynamoDB(opts))

  return vogels
}

const productionDynamoDB = () => {
  console.log('vogels', 'productionDynamoDB')

  vogels.AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })

  return vogels
}

export default isDevEnv
  ? localDynamoDB()
  : productionDynamoDB()
