const { gql } = require('apollo-server-express');


// check image and link in Book //
// check Query Me results //
// check mutation results //

const typeDefs = gql`
    type User {
        _id
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        id: Int
        authors: [String]
        description: String
        title: String
        image: image
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        bookCount(username: String): bookCount
        savedBooks(username: String): [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String! email: String! password: String!): Auth
        saveBook(): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;