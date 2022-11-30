const express = require("express");
const app = express();
const port = 5000;

app.get("/users/:userId", (req, res) => {
  res.json({
    userId: req.params.userId,
    reqHeaders: req.headers,
    reqBody: req.body,
    reqParams: req.params
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
