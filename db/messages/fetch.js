import { map, prop } from 'ramda'

import MessageModel from './model'

export function fetchAll ({ timestamp, topic }) {
  console.log('fetchAll', 'timestamp', timestamp, 'topic', topic)

  return (
    MessageModel
      .scan()
      .attributes([
        'authorName',
        'id',
        'text',
        'threadID',
        'threadName',
        'timestamp'
      ])
      .execAsync()
      .then(({ Items, Count, ScannedCount }) => map(prop('attrs'), Items))
  )
}
