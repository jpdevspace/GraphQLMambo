// Queries, mutations and types for GraphQL
import { buildSchema } from "graphql";

/*
  input is a keyword to define types for arguments
*/

export default buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type Query {
    hello: TestData
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    status: String!
    posts: [Post!]!
  }

  input UserInputData {
    email: String!
    name: String!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
  }

  schema {
    query: Query
    mutation: RootMutation
  }
`);
