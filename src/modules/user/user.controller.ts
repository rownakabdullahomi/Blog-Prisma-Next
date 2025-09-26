import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });

    // res.send(result);
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: "Book creation failed",
      error
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: "Get users failed",
      error
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUserById(Number(req.params.id));
    res.status(200).json({
      success: true,
      message: "Users get by ID successfully",
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: "Get user failed",
      error
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.updateUser(Number(req.params.id), req.body)
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.deleteUser(Number(req.params.id))
        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}


export const UserController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}
