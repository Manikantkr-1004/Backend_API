const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 7700;

const { connection } = require("./db");
const { userRouter } = require("./routes/userRoutes");
const { noteRouter } = require("./routes/noteRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/users",userRouter)
app.use("/notes",noteRouter)


app.get("/",(req,res)=>{
    res.send("This is the home page")
})


app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to the DB");
        console.log("server is running");
    } catch (error) {
        console.log(error);
    }
})
