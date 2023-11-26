import express from "express";
import User from "./models/users.js";
import cors from "cors";
import db from "./config/db.js";
import dotenv from 'dotenv';


const myapp = express();
myapp.use(express.json());
myapp.use(cors());
dotenv.config();


myapp.get("/", async (req, res) => {
  try {
    const resp = await db.execute(
      `Insert into users(name, email, password) values("Garvit", "garvit3@gmail.com", "12345");`
    );
    console.log(resp.insertId);
    console.log(resp, "ok");
    res.json({ message: "ewqeqw" });
  } catch (err) {
    res.json(err);
  }
});

myapp.listen(4000, () => {
  console.log("Sever running on http://localhost:4000");
});
