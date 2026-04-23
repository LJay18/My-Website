require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 2468;

//connect to database locally
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MonogDB connected sucessfully"))
.catch((err) => console.log("MongoDB connection error:", err))

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// router
const userRoute = require("./Route/userRoutes");
app.use("/users", userRoute);


app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
});
