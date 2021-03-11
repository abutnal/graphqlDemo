import mongoose, { Connection, Document } from "mongoose";
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
    timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" },
  }
);

export const customerModel = (db: Connection) => {
  return db.model<ICustomer>("customer", Customer);
};

module.exports = { customerModel };
