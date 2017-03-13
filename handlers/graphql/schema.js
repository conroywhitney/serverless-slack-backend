import 'babel-polyfill' // needed to for async/await
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
      message: {
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
        async resolve (_, args, ast) {
          const { timestamp, topic } = args

          return await fetchAllMessages({ timestamp, topic })
        }
      }
    }
  })
})
