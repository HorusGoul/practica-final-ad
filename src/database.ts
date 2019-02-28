import { createConnection } from "typeorm";

export async function createDatabaseConnection() {
  return createConnection()
    .then(async connection => {
      console.log("Conexión establecida con la base de datos.");

      return connection;
    })
    .catch(error => console.log(error));
}
