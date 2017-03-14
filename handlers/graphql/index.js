import { graphql } from 'graphql'

import Schema from './schema'

export function response (statusCode, body, callback) {
  var response = {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }

  callback(null, response)
}

export default function handler (event, context, callback) {
  const { query } = event.body

  console.log('graphql', 'handler', 'query', query)

  return graphql(Schema, query)
    .then(data => {
      console.log('graphql', 'then', 'data', data)
      return response(200, data, callback)
    })
    .catch(error => {
      console.log('graphql', 'catch', 'error', error)
      return response(500, error, callback)
    })
}
