const router = require("express").Router();
require("dotenv").config();

const MODEL_PERSON = process.env.MODEL_PERSON;

//Referencie o diretório "./models/Person.js" em .env "MODEL_PERSON"
const Person = require(MODEL_PERSON);

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
    try {
        const people = await Person.find();

        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
