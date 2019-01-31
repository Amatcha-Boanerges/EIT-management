import { gql } from 'apollo-server-express'

// The GraphQL schema
const typeDefs = gql`
  scalar Date
  type Query {
    getOneEIT(Firstname: String, Lastname: String, id: String): EIT
    getEITs: [EIT]
  }
  type Mutation {
    addEIT(Firstname: String!, Lastname: String!, Gender: String!, Dateofbirth: String!): EIT
    deleteEIT(id: String!): String
    updateEIT(Firstname: String!, Lastname: String!, Gender: String!, Dateofbirth: String!, id: String!): EIT
  }
  type EIT {
    _id: String
    Firstname: String
    Lastname: String
    Gender: String
    Dateofbirth:  String
    createdAt: Date
  }
`

export default typeDefs