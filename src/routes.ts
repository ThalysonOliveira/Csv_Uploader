import { Request, Response, Router } from "express";
import multer from "multer";
import { Readable } from "stream";
import readLine from "readline";
import { client } from "./database/client";

const multerConfig = multer();

const router = Router();

type Products = {
  code_bar: string;
  description: string;
  price: number;
  quantity: number;
};

router.post(
  "/products",
  multerConfig.single("file"),
  async (request: Request, response: Response) => {
      
    const { file } = request;
    const { buffer }: any = file;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const productsLine = readLine.createInterface({
      input: readableFile,
    });

    const products: Products[] = [];

    for await (let product of productsLine) {
      const productsLineSplit = product.split(",");

      products.push({
        code_bar: productsLineSplit[0],
        description: productsLineSplit[1],
        price: +productsLineSplit[2],
        quantity: +productsLineSplit[3],
      });
    }

    for await (let { code_bar, description, price, quantity } of products) {
      await client.products.create({
        data: {
          code_bar,
          description,
          price,
          quantity,
        },
      });
    }

    return response.send();
  }
);

export { router };
