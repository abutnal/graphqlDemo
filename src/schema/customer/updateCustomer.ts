import {   ApolloError, gql } from 'apollo-server-express';
import { UPDATE_CUSTOMER } from '../../config/api'

export const updateCustomerTypeDefs =  gql`
    extend type Mutation {
        ${UPDATE_CUSTOMER}(input: CustomerInput!): Customer! 
    }
`;

export const updateCustomerResolvers = {
    Mutation: {
        [UPDATE_CUSTOMER]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                return input
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
   
}