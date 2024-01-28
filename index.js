const express = require("express");
const cors = require('cors');
const connectDB = require("./DbConnection/dbconnect.js");
const errorHandler = require("./errorHandler/errorhandler.js");

const app = express();
const dotenv = require("dotenv").config();
connectDB();

const port = process.env.PORT;;

app.use(express.json())
app.use(cors());

app.use("/api/user" , require("./controller/userController.js"));
app.use("/api/service" , require("./routes/serviceRoutes.js"));
app.use("/api/order" , require("./routes/Cart.js"))

app.use(errorHandler);

app.listen(port , () => {
    console.log(`server is running on Port ${port}`)
});

