import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";

//entities
import { ClassPeriod } from "./entities/ClassPeriod";
import { Classroom } from "./entities/Classroom";
import { Student } from "./entities/Student";
import { Teacher } from "./entities/Teacher";
import { Subject } from "./entities/Subject";

//router
import { Year } from "./entities/Year";
import { createStudentRouter } from "./routes/create/create_student";
import { createClassPeroidRouter } from "./routes/create/create_classPeriod";
import { createClassroomRouter } from "./routes/create/create_classroom";
import { createSubjectRouter } from "./routes/create/create_subject";
import { createTeacherRouter } from "./routes/create/create_teacher";
import { createYearRouter } from "./routes/create/create_year";
import { fetchYearRouter } from "./routes/fetch/fetch_year";
import { fetchClassroomRouter } from "./routes/fetch/fetch_classroom";
import { fetchStudentRouter } from "./routes/fetch/fetch_student";
import { fetchTeacherRouter } from "./routes/fetch/fetch_Teacher";
import { fetchSubjectRouter } from "./routes/fetch/fetch_subject";
import { fetchClassPeriodRouter } from "./routes/fetch/fetch_classPeriod";

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

    app.use(express.json());

    app.use(createStudentRouter);
    app.use(createClassPeroidRouter);
    app.use(createClassroomRouter);
    app.use(createSubjectRouter);
    app.use(createTeacherRouter);
    app.use(createYearRouter);

    app.use(fetchYearRouter);
    app.use(fetchClassroomRouter);
    app.use(fetchStudentRouter);
    app.use(fetchTeacherRouter);
    app.use(fetchSubjectRouter);
    app.use(fetchClassPeriodRouter);

    console.log("connect success");
    app.listen(process.env.SERVER_PORT || 3000, () => {
      console.log(`running on port: ${process.env.SERVER_PORT || 3000}`);
    });
  } catch (error) {
    console.log("Error to connect");
  }
}

main();
