import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Plante } from "./models/entities/PlanteEntity";
import { User } from "./models/entities/UserEntity";

dotenv.config({path: "env.local"});

const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.db_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities : [User, Plante],
});
export default appDataSource;