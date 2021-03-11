import mongoose, { Connection, Document, model } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
}
const Customer = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
},
  {
      timestamps: true
  }
);

const customerModel = model<ICustomer>('customer', Customer);
export default customerModel;

