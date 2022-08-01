import cookieSession from "cookie-session";
import express  from "express";
import cors from "cors";
import './passport.js';
import authRoute from "./routes/auth.js";
import passport from "passport";
// constant imports
import {PORT, CLIENT_URL} from './constant/env.config.js'
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["capita"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(PORT, function () {
  console.log(`Server is running ${PORT}`);
});
