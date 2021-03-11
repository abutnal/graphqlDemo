import mongoose, {Document, model } from "mongoose";
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
    timestamps: true
  }
);

const productModel = model<IProduct>('product', Product);
export default productModel;


