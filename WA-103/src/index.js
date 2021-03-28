import express from "express";

const app = express();
const port = 5000;
const staticMiddleware = express.static("./public"); // direktorij sa statičkim datotekama

app.use("/", staticMiddleware);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));