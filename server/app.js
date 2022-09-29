import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "../config";
import ussdRoute from "./routes/ussd";

const app = express();
const db = config.MONGODB_URI;

//install middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//db connection
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfuly");
  } catch (error) {
    console.log("DB connection error");
  }
};

connectDb();

//Install routes
app.use("/", ussdRoute);

export default app;
