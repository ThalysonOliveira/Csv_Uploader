import { request, Request, Response, Router } from "express";

const router = Router();

router.post("/products", (request: Request, response: Response) => {
  return response.json("ok");
});

export { router };
