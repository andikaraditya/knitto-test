import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

(async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  app.use(bodyParser.urlencoded({ limit: "250mb", extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ limit: "250mb" }));
  app.use(morgan("dev"));

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World");
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
})();
