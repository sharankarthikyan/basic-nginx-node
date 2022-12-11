const express = require("express");
const app = express();
const os = require("os");

app.get("/", (req, res) => {
  res.send("I'm " + process.env.APP_ID);
});
app.listen(process.env.APP_ID, () =>
  console.log(`listening on PORT: ${process.env.APP_ID}`)
);
