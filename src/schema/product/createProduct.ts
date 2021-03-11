import {   ApolloError, gql } from 'apollo-server-express';
import { CREATE_PRODUCT } from '../../config/api'
export const createProductTypeDefs = gql `
  extend type Mutation{
  ${CREATE_PRODUCT}(input:ProductInput):Product!
  }

  input ProductInput{
      name:String!
      price:Float!
      qty:Int!
  }

  type Product{
      id:ID!
      name:String!
      price:Float!
      qty:Int!
  }
`

export const createProductResolvers = {
    Mutation: {
        [CREATE_PRODUCT]: async ( _:any, args:any, context:any, info:any ) => {
            try {
                const { input } = args
                const { productModel} = context
                const result = await productModel.create(input)
                return result
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
   
}