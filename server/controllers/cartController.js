import cartModel from "../models/cartModel.js";
import slugify from "slugify";

export const createCartController = async (req, res) => {
  try {
    const { plan } = req.body;
    const newCart = new cartModel({
      plan: plan,
      buyer: req.user._id,
    });
    await newCart.save();
    res.status(201).json({ message: 'Add to cart successfully', success: true, });
  } catch (error) {
    res.status(500).json({ error: 'An error Add to cart', success: false, });
  }
};

//update cart
export const updateCartController = async (req, res) => {
  try {
   
    const { id } = req.params;
    const { duration } = req.body;
    const cart = await cartModel.findByIdAndUpdate(
      id,
      { duration },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "cart Updated Successfully",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating cart",
    });
  }
};

// get all cart
export const cartControlller = async (req, res) => {
  try {
    const cart = await cartModel.find({});
    res.status(200).send({
      success: true,
      message: "All cart List",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all cart",
    });
  }
};

// single cart
export const singleCartController = async (req, res) => {
  try {
    const cart = await cartModel
    .find({ buyer: req.user._id  })
    .populate("plan", )
    .populate("buyer", "name");
    res.status(200).send({
      success: true,
      message: "Get SIngle cart Successfully",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single cart",
    });
  }
};

// try {
//   const tickets = await ticketModel
//     .find({ buyer: req.user._id })
//     .populate("buyer", "name");
//   res.json(tickets);
// } catch (error) {
//   console.log(error);
//   res.status(500).send({
//     success: false,
//     message: "Error WHile Geting tickets",
//     error,
//   });
// }

//delete cart

export const deleteCartController = async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "cart Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting cart",
      error,
    });
  }
};
