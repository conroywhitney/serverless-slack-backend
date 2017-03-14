import { compose, map, prop } from 'ramda'

import MessageModel from './model'

export function fetchAll ({ timestamp, topic }) {
  console.log('fetchAll', 'timestamp', timestamp, 'topic', topic)

  return (
    MessageModel
      .scan()
      .attributes(['payload'])
      .execAsync()
      .then(({ Items, Count, ScannedCount }) => {
        console.log('fetchAll', 'Items', Items)

        return compose(
          map(prop('attrs'))
        )(Items)
      })
  )
}
