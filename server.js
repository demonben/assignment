const express = require("express");
const cors = require("cors");
const app = express();
const dataRouter = require("./routes/dataRouter.js");

app.use(cors());
app.use("/data", dataRouter);

const port = 5001;
const host = "0.0.0.0";
app.listen(port, host, () => {
  console.log(`The server is listening on http://${host}:${port}`);
});
