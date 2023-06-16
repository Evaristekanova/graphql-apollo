const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Query {
        getAllUsers: [User]!
        getSingleUser(id: Int!): User
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
        updateUser(id: Int!, name: String, email: String): User!
        deleteUser(id: Int!): User!
    }
`
module.exports = {typeDefs};