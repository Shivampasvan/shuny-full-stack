require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// --------------->>>>>>>> Imports <<<<<<<<-------------------
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.routes");

// --------------->>>>>>>> Middlewares <<<<<<<<-------------------
app.use(cors());
app.use(express.json());

// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use("/users", userRouter);

// --------------->>>>>>>> Default EndPoint <<<<<<<<-------------------
app.get("/", (req, res) =>
  res.send(
    `<h1 style="text-align:center; color:gray">Welcome To The Backend</h1>`
  )
);

// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected To Database");
    console.log(`Server is UP & Running on ${process.env.port}`);
  } catch (error) {
    console.log("Error", error.message);
  }
});
