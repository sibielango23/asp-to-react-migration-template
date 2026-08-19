import { Router } from "express";

const router = Router();

router.post("/login", (request, response) => {
  const { username, password } = request.body ?? {};
  if (!username || !password) {
    return response.status(400).json({ error: "username and password are required" });
  }

  return response.json({ token: "dev-token" });
});

export default router;

