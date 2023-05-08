const express = require(`express`);

const app = express();

const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 }
    { id: 123, nome: 'rodrigo', idade: 17 }
];

app.get(`./`, (requisicao, resposta) => {
    resposta.send(`Rota principal - exercício da aula de express`);
});

app.get(`./usuarios`, (requisicao, resposta) => {
    resposta.send(usuarios);
});