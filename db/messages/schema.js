import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const MessagePayload = new GraphQLObjectType({
  name: 'MessagePayload',
  fields: () => ({
    authorName: { type: GraphQLString },
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    threadID: { type: GraphQLString },
    threadName: { type: GraphQLString },
    timestamp: { type: GraphQLString }
  })
})

export default new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    payload: { type: MessagePayload }
  })
})
