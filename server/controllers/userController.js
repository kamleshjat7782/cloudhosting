import slugify from "slugify";
import userModel from "../models/userModel.js";
export const createUserController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exisits",
      });
    }
    const user = await new userModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new user created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in User",
    });
  }
};

//update user
export const updateUserController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const user = await userModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating user",
    });
  }
};

// get all users
export const userController = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "All user List",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all user",
    });
  }
};  

// single user
export const singleUserController = async (req, res) => {
  try {
    const user = await userModel.findById( req.params.slug );
    res.status(200).send({
      success: true,
      message: "Get SIngle User SUccessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single User",
    });
  }
};

//delete user
export const deleteUserCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting user",
      error,
    });
  }
};
