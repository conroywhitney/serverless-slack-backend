import joi from 'joi'

import vogels from '../vogels'

const tableName = process.env.DYNAMODB_TABLE

console.log('db/messages/model', 'tableName', tableName)

export default vogels.define('Message', {
  tableName,
  hashKey: 'Topic',
  rangeKey: 'Timestamp',
  schema: {
    Topic: joi.string(),
    Timestamp: joi.date(),
    payload: joi.object().keys({
      authorName: joi.string(),
      id: joi.string(),
      text: joi.string(),
      threadID: joi.string(),
      threadName: joi.string(),
      timestamp: joi.string()
    })
  }
})
