import { createQueryBuilder } from "typeorm";
import { Student } from "./../../entities/Student";
import express from "express";
const router = express.Router();

router.get("/api/student/:student_id", async (req, res) => {
  const { student_id } = req.params;

  try {
    if (student_id === "all") {
      const student = await Student.find();
      return res.json(student);
    } else {
      const student = await createQueryBuilder("student")
        .select([
          "student.student_id",
          "student.student_first_name",
          "student.student_last_name",
        ])
        .from(Student, "student")
        .where("student.student_id = :student_id", { student_id: student_id })
        .getOne();
      return res.json(student);
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
});

export { router as fetchStudentRouter };
