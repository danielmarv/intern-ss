require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./models/models");
const handle = require("./handlers");
// const data = require("./models/studentdata");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // accept data with 50mb limit

app.get("/", (req, res) => res.json("The API is  running 200 ok!!"));
app.use("/api/auth", routes.auth);
app.use("/api/internships", routes.internships);
app.use("/api/admin", routes.admin);
app.use("/api/notices", routes.notices);
app.use("/api/faculty", routes.Faculty);
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Server is running on port ${port}`));
