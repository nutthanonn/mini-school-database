import { ClassPeriod } from "./../../entities/ClassPeriod";
import express from "express";

const router = express.Router();

router.post("/api/classPeroid", async (req, res) => {
  const { classPeriod_name, subject_id, teacher_id, classroom_id } = req.body;

  const classPeriod = ClassPeriod.create({
    classPeriod_name: classPeriod_name,
    subject_id: subject_id,
    teacher_id: teacher_id,
    classroom_id: classroom_id,
  });

  try {
    await classPeriod.save();
  } catch (error) {
    if (error) {
      return res.json({
        message: error.message,
      });
    }
  }

  return res.json(classPeriod);
});

export { router as createClassPeroidRouter };
