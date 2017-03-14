import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql'

import { fetchAllMessages, MessageSchema } from '../../db/messages'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    description: 'Root of the Schema',
    fields: {
      messages: {
        name: 'MessageQuery',
        description: 'Retrieve messages from a topic created after a timestamp',
        type: new GraphQLList(MessageSchema),
        args: {
          topic: {
            type: GraphQLString // currently subscribed topic / channel
          },
          timestamp: {
            type: GraphQLInt,
            defaultValue: 0 // default to all messages since epoch
          }
        },
        resolve (_, args, ast) {
          const { timestamp, topic } = args

          console.log('graphql schema', 'resolve', 'timestamp', timestamp, 'topic', topic)

          return fetchAllMessages({ timestamp, topic })

          // console.log('graphql schema', 'resolve', 'messages', messages)

          // return messages

          // return [{ id: '123', text: 'abc' }]
        }
      }
    }
  })
})
