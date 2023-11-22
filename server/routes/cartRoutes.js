import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  cartControlller,
  createCartController,
  deleteCartController,
  singleCartController,
  updateCartController,
} from "./../controllers/cartController.js";

const router = express.Router();

//routes
// create cart
router.post(
  "/create-cart",
  requireSignIn,
  createCartController
);

//update cart
router.put(
  "/update-cart/:id",
  requireSignIn,
  updateCartController
);

//getALl cart
router.get("/get-cart", cartControlller);

//single cart
router.get("/single-cart",requireSignIn, singleCartController);

//delete cart
router.delete(
  "/delete-cart/:id",
  requireSignIn,
//   isAdmin,
  deleteCartController
);

export default router;
