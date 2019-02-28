import { Router } from "express";
import PostController from "../../controllers/post.controller";

const router = Router();

router.post("/", PostController.create);
router.get("/", PostController.findAll);
router.get("/:id", PostController.findOne);
router.put("/:id", PostController.updateOne);
router.delete("/:id", PostController.deleteOne);

export default router;
