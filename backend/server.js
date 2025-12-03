import dotenv from "dotenv";
dotenv.config();
console.log("DEBUG: MONGO_URI =", process.env.MONGO_URI);
import express from "express";
import cors from "cors";
import records from "./routes/record.js";




const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

app.get("/", (req, res) => {
  res.send("MongoDB Express API is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});