import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = new express();



app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN); // The origin you want to allow
    res.header('Access-Control-Allow-Credentials', 'true');            // Allow credentials
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH'); // Other headers as needed
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');     // Other headers as needed
    next();
  });

//routes import
import authRouter from "./routes/auth.routes.js";
//import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/auth", authRouter);
//app.use("/api/v1/users", userRouter);


export default app;