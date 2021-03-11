import mongoose, { Connection, Document } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
export interface IProduct extends Document {
  name: string;
  price: number;
  qty: number;
}

const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
    },
},
  {
    timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" },
  }
);

export const productModel = (db: Connection) => {
  return db.model<IProduct>("product", Product);
};

module.exports = { productModel };
