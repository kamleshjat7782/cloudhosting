import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  plan: [
    {
      type: mongoose.ObjectId,
      ref: "Products",
    },
  ],
      buyer: {
        type: mongoose.ObjectId,
        ref: "users",
      },
      duration: String,   
},
{ timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
