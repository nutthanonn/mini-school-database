import express from "express";
import { Year } from "../../entities/Year";

const router = express.Router();

router.post("/api/year", async (req, res) => {
  const { year_name } = req.body;

  const year = Year.create({
    year_name: year_name,
  });

  try {
    await year.save();
  } catch (error) {
    if (error) {
      return res.json({ message: error.message });
    }
  }
  return res.json(year);
});

export { router as createYearRouter };
