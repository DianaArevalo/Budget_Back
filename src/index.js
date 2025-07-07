import express from "express";
import { loginRouter } from "../routes/login.js";
import passport from "passport"

const app = express();

//middelwares
app.use(express.json());
app.use(passport.initialize()); 


//routes
app.use("/auth", loginRouter)

app.listen(3000, () => console.log("http://localhost:3000"));