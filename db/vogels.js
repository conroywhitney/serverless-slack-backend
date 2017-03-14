import AWS from 'aws-sdk'
import vogels from 'vogels-promisified'

var opts = { endpoint: 'http://localhost:8000', apiVersion: '2012-08-10' }
vogels.dynamoDriver(new AWS.DynamoDB(opts))

export default vogels

// vogels.AWS.config.update({region: 'us-east-1'})
