const express = require("express");
const gettingData = require("../util/getingData");

const router = express.Router();

router.get("/:option", async (req, res, next) => {
  try {
    let data = await gettingData(req.params.option);
    if (!data) {
      res.send(404);
      res.send({ message: "no data" });
      return;
    }
    console.log(data);
    res.send({ data });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
