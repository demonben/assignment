const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = 5001
app.listen(port, () => {
    console.log(`server is listening ${port}...`);
  });