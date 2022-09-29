import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Get /",
  });
});

router.post("/", (req, res) => {
  const { phoneNumber, text, serviceCode, sessionID } = req.body;

  let response = "";

  if (text == "") {
    response = `CON Choose service
        1. My account
        2. Send money`;
  } else if (text == "1") {
    response = `CON Choose account information you want to view
        1. Account number
        2. Mini statement `;
  } else if (text == "2") {
    response = `CON 
    1. To bank
    2. To Mpesa `;
  } else if (text == "1*1") {
    const accountNumber = "ACC100101";
    response = `END Your account number is ${accountNumber}`;
  } else if (text == "1*2") {
    response = `END Your mini statement has been sent to your email `;
  } else if (text == "2*1") {
    response = `CON 
    1. Enter Bank account number
    2. Cancel `;
  } else if (text == "2*2") {
    reponse = `CON 
    1. Enter phone number
    2. Cancel `;
  } else if (text == "2*1*1") {
    response = `CON `
  }

  setTimeout(() => {
    res.send(response);
    res.end();
  }, 2000);
});

export default router;
