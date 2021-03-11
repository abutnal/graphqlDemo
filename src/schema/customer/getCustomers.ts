import {   ApolloError, gql } from 'apollo-server-express';
import { GET_CUSTOMERS } from '../../config/api'

export const getCustomersTypeDefs =  gql`
    extend type Query {
        ${GET_CUSTOMERS}: [Customer!] 
        
    }
`;

export const getCustomersResolvers = {
    Query: {
        [GET_CUSTOMERS]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                return input
              
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
   
}