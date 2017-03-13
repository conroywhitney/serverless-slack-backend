import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Message',
  fields: {
    authorName: { type: GraphQLString },
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    threadID: { type: GraphQLString },
    threadName: { type: GraphQLString },
    timestamp: { type: GraphQLInt }
  }
})
