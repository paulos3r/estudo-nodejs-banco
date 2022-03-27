# estudo-nodejs-banco
Projeto criado para aprender banco de dados integrado com nodeJS

### PASSO A PASSO

`1 - tsc --init`,
`2 - npm install express mustache-express dotenv`,
`3 - npm install --save-dev @types/express @types/mustache-express @types/node`,
`4 - npm install -g nodemon typescript ts-node`,
`5 - npm install --save-dev copyfiles`

### biblioteca orm
`npm install --save sequelize`,
`npm install --save-dev @types/sequelize`,
`npm install pg pg-hstore`

### biblioteca de terceiros para manipulação

`npm install body-parser`,

### estrutura

- estudo-nodejs-banco
    - /public
        - /css
        - /js
        - /img
    - /src
        - /controllers
        - /instances
        - /models
        - /routes
        - /views
            - /pages
            - /partials
        - server.ts

router -> controller -> model -> instances
### rodar o projeto
`npm install`,
`npm run start-dev`