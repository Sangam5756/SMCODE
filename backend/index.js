import express from "express";

const app = express();


const PORT = 5000

app.get("/", (req, res) => {
  res.send("I Am Root");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
