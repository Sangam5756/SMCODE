import express from "express";
import { configDotenv } from "dotenv";
import { dbcon } from "./db/dbconnect.js";
import questionRouter from "./routes/Question.router.js"

configDotenv();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("I Am Root");
});

app.use('/api',questionRouter );



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  dbcon().then(console.log("connected to db"));
});
