import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import router from "./routes";

export async function createApiServer() {
  const server = express();
  const port = process.env.PORT || 3000;

  // Middleware
  server.use(morgan("dev"));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cors());

  // Router
  server.use(router);

  server.listen(port, () => {
    console.log(`API encendida (http://localhost:${port})`);
  });
}
