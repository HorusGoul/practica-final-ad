import { Router } from "express";
import apiRouter from "./api";

const router = Router();

router.get("/api", apiRouter);

export default router;
