import express from "express";
import { Student } from "./../../entities/Student";

const router = express.Router();

router.post("/api/student", async (req, res) => {
  const {
    student_first_name,
    student_last_name,
    student_birthday_year,
    student_tel,
    classroom_id,
  } = req.body;

  const student = Student.create({
    student_first_name: student_first_name,
    student_last_name: student_last_name,
    student_birthday_year: student_birthday_year,
    student_tel: student_tel,
    classroom_id: classroom_id,
  });

  try {
    await student.save();
  } catch (error) {
    if (error) {
      return res.json({
        message: error.message,
      });
    }
  }

  return res.json(student);
});

export { router as createStudentRouter };
