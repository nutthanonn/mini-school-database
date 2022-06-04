import express from "express";
import { Classroom } from "./../../entities/Classroom";
import { createQueryBuilder } from "typeorm";
const router = express.Router();

router.get("/api/classroom/:classroom_id", async (req, res) => {
  const { classroom_id } = req.params;

  try {
    if (classroom_id === "all") {
      const classroom = await Classroom.find();
      return res.json(classroom);
    } else {
      const classroom = await createQueryBuilder("classroom")
        .select(["classroom.classroom_id", "classroom.classroom_name"])
        .from(Classroom, "classroom")
        .where("classroom.classroom_id = :classroom_id", {
          classroom_id: classroom_id,
        })
        .getOne();
      return res.json(classroom);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export { router as fetchClassroomRouter };
