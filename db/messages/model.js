import joi from 'joi'
import vogels from 'vogels'

import { project, stage } from '../../constants'

const tableName = `${stage}-${project}-messages`

export default vogels.define('Message', {
  tableName,

  hashKey: 'id',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: {
    authorName: joi.string(),
    id: joi.string(),
    text: joi.string(),
    threadID: joi.string(),
    threadName: joi.string(),
    timestamp: joi.number()
  }
})
