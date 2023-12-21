import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    monthlyPrice: {
      type: Number,
    },
    quarterlyPrice: {
      type: Number,
    },
    halfYearlyPrice: {
      type: Number,
    },
    yearlyPrice: {
      type: Number,
    },
    storage: {
      type: Number,
      required: true,
    },
    core: {
      type: Number,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
    },
    bandwidth: {
      type: Number,
      required: true,
    },
   
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
