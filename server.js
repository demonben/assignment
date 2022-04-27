const express = require('express')
const app = express()
const dataRouter = require("./routes/dataRouter.js")

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use("/data", dataRouter)

const port = 5001
const host = "0.0.0.0"
app.listen(port, host, () => {
    console.log(`The server is listening on http://${host}:${port}`);
  });

