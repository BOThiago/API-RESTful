# API RESTful com Node.js e MongoDB

CRUD com Node, Express e Mongoose

Crie um banco de dados no MongoDB ou MongoDB Atlas

Crie um arquivo .env e insira as variáveis de ambiente DB_USER e DB_PASSWORD com as respectivas credenciais e referencie MODEL_PERSON e PERSON_ROUTE com os diretórios "./model/person.js" e "./routes/personRoutes.js" respectivamente.

Para iniciar a API digite no terminal "npm start"

Rotas da API:

    Status da aplicação: GET (localhost:3000/)

    Inserção de pessoa: POST (localhost:3000/person)

        {
            "name": "Nome Teste",
            "salary": 2000,
            "approved": true
        }

    body:

        {
            "message": "Pessoa inserida no sistema com sucesso!"
        }

    Visualizar pessoas: GET (localhost:3000/person)

    Resgatar pessoas: GET (localhost:3000/person/{ID})

    Atualizar pessoas: PATCH (localhost:3000/person/{ID})

        {
            "name": "Nome Teste Atualizado",
            "salary": 2000,
            "approved": true
        }

    Remover Pessoas: DELETE (localhost:3000/person/{ID})
