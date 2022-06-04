import { createQueryBuilder } from "typeorm";
import { ClassPeriod } from "./../../entities/ClassPeriod";
import express from "express";

const router = express.Router();

router.get("/api/classPeriod/:classPeriod_id", async (req, res) => {
  const { classPeriod_id } = req.params;

  try {
    if (classPeriod_id === "all") {
      const classPeriod = await ClassPeriod.find();
      return res.json(classPeriod);
    } else {
      const classPeriod = await createQueryBuilder("classPeriod")
        .select([
          "classPeriod.classPeriod_id",
          "classPeriod.classPeriod_name",
          "classPeriod.subject_id",
          "classPeriod.teacher_id",
          "classPeriod.classroom_id",
        ])
        .from(ClassPeriod, "classPeriod")
        .where("classPeriod.classPeriod_id = :classPeriod_id", {
          classPeriod_id: classPeriod_id,
        })
        .getOne();
      return res.json(classPeriod);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export { router as fetchClassPeriodRouter };
