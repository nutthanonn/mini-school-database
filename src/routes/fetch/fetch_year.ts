import { Year } from "./../../entities/Year";
import express from "express";

const router = express.Router();

router.get("/api/year/:year_id", async (req, res) => {
  const { year_id } = req.params;
  const year = await Year.createQueryBuilder("year")
    .select("year.year_name")
    .from(Year, "year")
    .where("Year.year_id = :yearId", { yearId: year_id })
    .getOne();

  return res.json(year);
});

export { router as fetchYearRouter };
