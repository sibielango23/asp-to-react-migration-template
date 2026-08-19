import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { listUsers } from "../services/userService.js";

const router = Router();

router.get("/", requireAuth, (_request, response) => {
  response.json(listUsers());
});

export default router;

