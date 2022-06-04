import { Subject } from "./../../entities/Subject";
import { createQueryBuilder } from "typeorm";
import express from "express";
const router = express.Router();

router.get("/api/subject/:subject_id", async (req, res) => {
  const { subject_id } = req.params;

  try {
    if (subject_id === "all") {
      const subject = await Subject.find();
      return res.json(subject);
    } else {
      const subject = await createQueryBuilder("subject")
        .select("subject.subject_name")
        .from(Subject, "subject")
        .where("subject.subject_id = :subject_id", { subject_id: subject_id })
        .getOne();
      return res.json(subject);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export { router as fetchSubjectRouter };
