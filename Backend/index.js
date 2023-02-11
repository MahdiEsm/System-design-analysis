const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routrs/user");
const authRoute = require("./routrs/auth")

mongoose.connect(
    "mongodb+srv://mahdiesm:mmaahhddii@cluster0.rtbifmm.mongodb.net/sad?retryWrites=true&w=majority"
).then(() => console.log("DB connect success"))
.catch((err) =>{
    console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
    console.log("backend is running")
}) 