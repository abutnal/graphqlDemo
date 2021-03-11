import {   ApolloError, gql } from 'apollo-server-express';
import { DELETE_CUSTOMER } from '../../config/api'

export const deleteCustomerTypeDefs =  gql`
    extend type Mutation {
        ${DELETE_CUSTOMER}(input: CustomerInput!): Customer! 
    }
`;

export const deleteCustomerResolvers = {
    Mutation: {
        [DELETE_CUSTOMER]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                return input
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
   
}