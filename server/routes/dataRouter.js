const express = require("express");
const gettingData = require("../util/getingData");

const router = express.Router();

router.get("/:option/:page", async (req, res, next) => {
  try {
    let data = await gettingData(req.params.option, req.params.page);
    if (!data) {
      res.send(404);
      res.send({ message: "no data" });
      return;
    }
    res.send({ data });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
