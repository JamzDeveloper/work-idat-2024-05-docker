require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
  console.log(`server escuchando en el puerto ${port}`);
});
