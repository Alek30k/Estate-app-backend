import express from "express";
import { createPost } from "../controllers/post.controller.js";
const router = express.Router();

router.get("/posta", createPost);

// router.post("/ale");

// router.put("/ale");

// router.delete("/ale");

export default router;
