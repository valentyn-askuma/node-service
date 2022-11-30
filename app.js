const express = require("express");
const app = express();
const port = 5000;

app.get("/users/:userId", (req, res) => {
  const data = {
    userId: req.params.userId,
    reqHeaders: req.headers,
    reqBody: req.body,
    reqParams: req.params,
  };

  console.log(new Date().toLocaleDateString(), data);

  res.json(data);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
