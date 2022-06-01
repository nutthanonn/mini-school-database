import { Classroom } from "./../../entities/Classroom";
import express from "express";

const router = express.Router();

router.post("/api/classroom", async (req, res) => {
  const { classroom_name, year_id } = req.body;

  const classroom = Classroom.create({
    classroom_name: classroom_name,
    year_id: year_id,
  });

  try {
    await classroom.save();
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }

  return res.json(classroom);
});


export {router as createClassroomRouter}