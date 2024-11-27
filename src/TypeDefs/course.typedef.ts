export const CourseQueries = `#graphql    
    type Course {
        _id:ID!
        title:String!
        description:String!
        duration:String!
        instructor:String!
        price:String!
        category:String!
        tags:[String!]!
        takenBy:[User!]
    }

    type Query {
        courses:[Course]
        coursebyId(id:ID!):Course
    }
`;
