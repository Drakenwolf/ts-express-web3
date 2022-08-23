const express = require("express");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    console.log(req, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
