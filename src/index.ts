import { Student } from "./entities/Student";
import { Year } from "./entities/Year";
import { Teacher } from "./entities/Teacher";
import express from "express";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { ClassPeriod } from "./entities/ClassPeriod";
import { Classroom } from "./entities/Classroom";
import { Subject } from "./entities/Subject";

const app = express();
dotenv.config();

async function main() {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.HOST,
      port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : "") || 1234,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ClassPeriod, Classroom, Student, Subject, Teacher, Year],
      synchronize: true,
    });
    console.log("connect success");
    app.listen(process.env.SERVER_PORT || 3000, () => {
      console.log(`running on port: ${process.env.SERVER_PORT || 3000}`);
    });
  } catch (error) {
    console.log("Error to connect");
  }
}

main();
