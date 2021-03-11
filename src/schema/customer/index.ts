import {createCustomerTypeDefs,  createCustomerResolvers} from './createCustomer';
import {updateCustomerTypeDefs,  updateCustomerResolvers} from './updateCustomer';
import {deleteCustomerTypeDefs,  deleteCustomerResolvers} from './deleteCustomer';
import {getCustomerTypeDefs,  getCustomerResolvers} from './getCustomer';
import {getCustomersTypeDefs,  getCustomersResolvers} from './getCustomers';

export const customerTypeDefs = [
    createCustomerTypeDefs, 
    updateCustomerTypeDefs, 
    deleteCustomerTypeDefs, 
    getCustomerTypeDefs, 
    getCustomersTypeDefs
]
export const customerResolvers = [
    createCustomerResolvers,
     updateCustomerResolvers,
     deleteCustomerResolvers,
     getCustomerResolvers,
     getCustomersResolvers,
    ]