import { Teacher } from "./../../entities/Teacher";
import express from "express";

const router = express.Router();

router.post("/api/teacher", async (req, res) => {
  const {
    teacher_first_name,
    teacher_last_name,
    teacher_birthday_year,
    teacher_tel,
    teacher_email,
  } = req.body;

  const teacher = Teacher.create({
    teacher_first_name: teacher_first_name,
    teacher_last_name: teacher_last_name,
    teacher_birthday_year: teacher_birthday_year,
    teacher_tel: teacher_tel,
    teacher_email: teacher_email,
  });

  try {
    await teacher.save();
  } catch (error) {
    if (error) {
      res.json({
        message: error.message,
      });
    }
  }

  return res.json(teacher);
});

export { router as createTeacherRouter };
