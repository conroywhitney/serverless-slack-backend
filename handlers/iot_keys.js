import AWS from 'aws-sdk'

AWS.config.update({ region: 'us-east-1' })

const iotClient = new AWS.Iot()
const sts = new AWS.STS()
const roleName = 'serverless-slack-iot'

// CORS Headers
const CORSHeaders = {
  'Access-Control-Allow-Origin': '*'
}

// Internal Server Error
const errorHandler = (err, callback) => {
  callback(null, {
    statusCode: 500,
    headers: CORSHeaders,
    body: JSON.stringify({
      message: 'Internal Server Error',
      error: err.toString()
    })
  })
}

// Get region from iotEndpoint
const getRegion = iotEndpoint => {
  const partial = iotEndpoint.replace('.amazonaws.com', '')
  const iotIndex = iotEndpoint.indexOf('iot')
  return partial.substring(iotIndex + 4)
}

// Get random Int
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function handler (event, context, callback) {
  // get the endpoint address
  iotClient.describeEndpoint({}, (err, data) => {
    if (err) return errorHandler(err, callback)

    const iotEndpoint = data.endpointAddress

    // get the account id which will be used to assume a role
    sts.getCallerIdentity({}, (err, data) => {
      if (err) return errorHandler(err, callback)

      const params = {
        RoleArn: `arn:aws:iam::${data.Account}:role/${roleName}`,
        RoleSessionName: getRandomInt(0, Number.MAX_SAFE_INTEGER).toString()
      }

      // assume role returns temporary keys
      sts.assumeRole(params, (err, data) => {
        if (err) return errorHandler(err, callback)

        return callback(null, {
          statusCode: 200,
          headers: CORSHeaders,
          body: JSON.stringify({
            iotEndpoint: iotEndpoint,
            region: getRegion(iotEndpoint),
            awsAccessKey: data.Credentials.AccessKeyId,
            awsSecretAccessKey: data.Credentials.SecretAccessKey,
            sessionToken: data.Credentials.SessionToken
          })
        })
      })
    })
  })
}
