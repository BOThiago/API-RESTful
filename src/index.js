const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Adicione as variáveis de ambiente para a conexão do banco de dados no diretório .env
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const MODEL_PERSON = process.env.MODEL_PERSON;

//Referencie o diretório "./models/Person.js" em .env "MODEL_PERSON"
const Person = require(MODEL_PERSON);

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.post("/person", async (req, res) => {
    const { name, salary, approved } = req.body;

    if (!name) {
        res.status(422).json({ error: "O nome é obrigatório!" });
    }

    if (!salary) {
        res.status(422).json({ error: "O salário é obrigatório!" });
    }

    if (!name) {
        res.status(422).json({ error: "A aprovação é obrigatória!" });
    }

    const person = {
        name,
        salary,
        approved,
    };

    try {
        await Person.create(person);

        res.status(201).json({
            message: "Pessoa inserida no sistema com sucesso!",
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

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
