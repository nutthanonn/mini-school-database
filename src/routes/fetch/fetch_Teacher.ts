import { Teacher } from "./../../entities/Teacher";
import { createQueryBuilder } from "typeorm";
import express from "express";

const router = express.Router();

router.get("/api/teacher/:teacher_id", async (req, res) => {
  const { teacher_id } = req.params;

  try {
    if (teacher_id === "all") {
      const teacher = await Teacher.find();
      return res.json(teacher);
    } else {
      const teacher = await createQueryBuilder("teacher")
        .select([
          "teacher.teacher_id",
          "teacher.teacher_first_name",
          "teacher.teacher_last_name",
        ])
        .from(Teacher, "teacher")
        .where("teacher.teacher_id = :teacher_id", {
          teacher_id: teacher_id,
        })
        .getOne();
      return res.json(teacher);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export { router as fetchTeacherRouter };
