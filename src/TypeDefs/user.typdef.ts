export const UserQueries = `#graphql
    
    type User {
        _id:ID!
        name:String!
        email:String!
        password:String!
        role:String
        address:String!
        hobbies:[String!]
        courses:[Course!]
    }

    type Query {
        users:[User]
        userbyId(id:ID!):User
    }
`;
