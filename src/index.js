const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "A API está rodando na porta 3000",
    });
});

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.qxgsfsr.mongodb.net/APIdb?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conexão estabelecida com o banco de dados!");
        app.listen(3000);
    })
    .catch((err) => console.log(err));
