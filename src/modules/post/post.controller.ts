import { Request, Response } from "express";
import { PostServices } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPost(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;
    const search = req.query.search || "";
    const result = await PostServices.getAllPosts(
      page,
      limit,
      search as string
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err });
  }
};

const getPostById = async (req: Request, res: Response) => {
  const post = await PostServices.getPostById(Number(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
};

const updatePost = async (req: Request, res: Response) => {
  const post = await PostServices.updatePost(Number(req.params.id), req.body);
  res.json(post);
};

const deletePost = async (req: Request, res: Response) => {
  await PostServices.deletePost(Number(req.params.id));
  res.json({ message: "Post deleted" });
};

export const PostController = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
