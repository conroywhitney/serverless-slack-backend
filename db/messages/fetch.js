import MessageModel from './model'

export async function fetchAll ({ timestamp, topic }) {
  console.log('fetchAll', 'timestamp', timestamp, 'topic', topic)

  const response = await (
    MessageModel
      .scan()
      .attributes([
        // 'payload'
        'authorName',
        'id',
        'text',
        'threadID',
        'threadName',
        'timestamp'
      ])
      .execAsync()
    )

  const { Items, Count, ScannedCount } = await response

  console.log(
    'fetchAll', 'then',
    'Items', Items,
    'Count', Count,
    'ScannedCount', ScannedCount
  )

  return Items
}
