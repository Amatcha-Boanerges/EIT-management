import { gql } from 'apollo-server-express'

// The GraphQL schema
const typeDefs = gql`
  scalar Date
  type Query {
    getOneEIT(firstName: String, lastName: String, id: String): [EIT]
    getEITs: [EIT]
  }
  type Mutation {
    addEIT(Firstname: String!, Lastname: String!, Gender: String!, Dateofbirth: Date!): EIT
    deleteEIT(id: String!): String
    updateEIT(Firstname: String!, Lastname: String!, Gender: String!, Dateofbirth: Date!, id: String!): EIT
  }
  type EIT {
    id: Int
    firstName: String
    lastName: String
    Gender: String
    Dateofbirth:  Date
    createdAt: Date
    owner: Owner
  }
  type Owner {
    id: Int
    userName: String
    lastName: String
  }
  type Task {
    _id: String
    text: String
    createdAt: Date
    checked: Boolean
  }
`

export default typeDefs