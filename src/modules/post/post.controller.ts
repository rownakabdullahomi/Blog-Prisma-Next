import { Request, Response } from "express";
import { PostServices } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.createPost(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const PostController = {
    createPost
}