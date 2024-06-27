import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    password: String
    profileDp: String
    email: String
    userId: String
  }

  # You must add a type Query for your get request in the graphql schema and a type mutation for any mutations
  # The square bracket is what you want graphql to return
  type Query {
    users(id: ID): User
  }
  type Mutation {
    createNewUser(user: createUserInput!): User # For createUser I just need the user Details that i'd input
    editUser(id: ID!, edits: editUserInput!): User #To edit a user i'd need the id of the finance i want to edit and the details of what i want to edit
  }
  input createUserInput {
    _id: String!
    userId: String!
    username: String!
    password: String!
    profileDp: String!
    email: String!
    currency: String
    # notifications: []
  }
  input editUserInput {
    _id: String
    userId: String!
    username: String!
    password: String!
    profileDp: String!
    email: String!
    currency: String
  }
`;
