import MessageModel from './model'

export async function fetchAll ({ timestamp, topic }) {
  return (
    MessageModel
      .scan()
      .where('topic').equals(topic)
      .where('timestamp').gte(timestamp)
      .attributes([
        'authorName',
        'id',
        'text',
        'threadID',
        'threadName',
        'timestamp'
      ])
      .exec()
  )
}
