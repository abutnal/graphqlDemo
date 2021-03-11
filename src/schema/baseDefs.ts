import { gql } from 'apollo-server-express';

export const baseTypeDefs = gql `
    directive @isAuth on FIELD_DEFINITION
    scalar JSON
    scalar JSONObject

    type Query {
        _:String!
    }

    type Mutation {
        _:String!
    }

    type Subscription {
        _:String!
    }
`;