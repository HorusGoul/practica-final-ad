import "reflect-metadata";
import { createDatabaseConnection } from "./database";
import { createApiServer } from "./api";

async function bootstrap() {
  await createDatabaseConnection();
  createApiServer();
}

bootstrap();
