require("dotenv").config();

const express = require("express");
const path = require("path");
const routers = require("./routes/stripeRoutes");

const app = express();
const url = process.env.FRONT_URL;
const port = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend")));
app.use("/ebook", routers);

app.listen(port, () => {
    console.log(`Server is running on ${url}${port}`);
});

module.exports = app;