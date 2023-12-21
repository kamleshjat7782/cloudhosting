import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  userController,
  createUserController,
  deleteUserCOntroller,
  singleUserController,
  updateUserController,
} from "./../controllers/userController.js";

const router = express.Router();

//routes


// update user
// router.put(
//   "/update-category/:id",
//   requireSignIn,
//   isAdmin,
//   updateUserController
// );

//getALl user
router.get("/get-users", userController);

//single user
router.get("/single-user/:slug", singleUserController);

//delete user
router.delete(
  "/delete-user/:id",
  requireSignIn,
  isAdmin,
  deleteUserCOntroller
);

export default router;
