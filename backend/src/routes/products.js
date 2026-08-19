import { Router } from "express";
import { listProducts } from "../services/productService.js";

const router = Router();

router.get("/", (_request, response) => {
  response.json(listProducts());
});

export default router;

