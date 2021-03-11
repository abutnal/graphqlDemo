import { baseTypeDefs } from './baseDefs'
import { customerTypeDefs, customerResolvers } from './customer'
import { productTypeDefs, productResolvers} from './product'
export const typeDefs = [
    baseTypeDefs,
    ...customerTypeDefs,
    ...productTypeDefs
]
export const resolvers = [
    ...customerResolvers,
    ...productResolvers
]