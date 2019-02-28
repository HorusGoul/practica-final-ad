import Post from "../entity/post.entity";
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

class PostController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const postRepository = getRepository(Post);

      const postDto: Post = req.body;
      const post = await postRepository.save(postDto);

      res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const postRepository = getRepository(Post);

      const posts = await postRepository.find();

      res.status(200).json(posts);
    } catch (e) {
      next(e);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const postRepository = getRepository(Post);

      const id: number = req.params.id;
      const post = await postRepository.findOne(id);

      if (!post) {
        res.status(404).send();
        return;
      }

      res.status(200).json(post);
    } catch (e) {
      next(e);
    }
  }

  async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const postRepository = getRepository(Post);

      const id: number = req.params.id;
      const post: Post = req.body;

      await postRepository.update({ id }, post);

      res.status(200).send();
    } catch (e) {
      next(e);
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const postRepository = getRepository(Post);

      const id: number = req.params.id;
      await postRepository.delete({ id });

      res.status(200).send();
    } catch (e) {
      next(e);
    }
  }
}

export default new PostController();
