import AWS from 'aws-sdk'
import vogels from 'vogels-promisified'

import { isDevEnv } from '../utils/env'

const localDynamo = () => {
  console.log('vogels', 'localDynamo')

  var opts = { endpoint: 'http://localhost:8000', apiVersion: '2012-08-10' }
  vogels.dynamoDriver(new AWS.DynamoDB(opts))

  return vogels
}

const productionDynamo = () => {
  console.log('vogels', 'productionDynamo', process.env.NODE_ENV)

  vogels.AWS.config.update({region: 'us-east-1'})

  return vogels
}

export default isDevEnv
  ? localDynamo()
  : productionDynamo()
