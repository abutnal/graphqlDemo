import {   ApolloError, gql } from 'apollo-server-express';
import { CREATE_CUSTOMER } from '../../config/api'

export const createCustomerTypeDefs =  gql`
    extend type Mutation {
        ${CREATE_CUSTOMER}(input: CustomerInput!): Customer! 
    }
    input CustomerInput {
        firstName: String!
        lastName: String!
    }
    type Customer {
        id: ID!
        firstName: String!
        lastName: String!
       
    }
`;

export const createCustomerResolvers = {
    Mutation: {
        [CREATE_CUSTOMER]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                return input
              
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
}