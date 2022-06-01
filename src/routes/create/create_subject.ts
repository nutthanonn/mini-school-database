import { Subject } from "./../../entities/Subject";
import express from "express";

const router = express.Router();

router.post("/api/subject", async (req, res) => {
  const { subject_name } = req.body;

  const subject = Subject.create({
    subject_name: subject_name,
  });

  try {
    await subject.save();
  } catch (error) {
    if (error) {
      return res.json({
        message: error.message,
      });
    }
  }
  return res.json(subject);
});


export {router as createSubjectRouter}