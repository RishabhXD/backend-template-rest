const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const exampleAPI = require("./routes/exampleRoute");
const { connectDB } = require("./config/db");
const app = express();

// Config
dotenv.config({ path: "/config/config.env" });
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// DB Connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", exampleAPI);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
