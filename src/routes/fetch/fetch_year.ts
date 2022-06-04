import { createQueryBuilder } from 'typeorm';
import { Year } from "./../../entities/Year";
import express from "express";

const router = express.Router();

router.get("/api/year/:year_id", async (req, res) => {
  const { year_id } = req.params;

  try {
    if (year_id === "all") {
      const year = await Year.find();
      return res.json(year);
    } else {
      const year = await createQueryBuilder("year")
        .select("year.year_name")
        .from(Year, "year")
        .where("Year.year_id = :yearId", { yearId: year_id })
        .getOne();
      return res.json(year);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export { router as fetchYearRouter };
