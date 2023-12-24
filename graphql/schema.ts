// Queries, mutations and types for GraphQL
import { buildSchema } from "graphql";


export default buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type Query {
    hello: TestData
  }

  schema {
    query: Query
  }
`);
