import {   ApolloError, gql } from 'apollo-server-express';
import { GET_CUSTOMER } from '../../config/api'

export const getCustomerTypeDefs =  gql`
    extend type Query {
        ${GET_CUSTOMER}: Customer!
        
    }
`;
export const getCustomerResolvers = {
    Query: {
        [GET_CUSTOMER]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                return input
              
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
   
}