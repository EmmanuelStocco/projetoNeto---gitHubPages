const express = require('express')
const app = express()

const Correios = require('node-correios');
let correio = new Correios();
 
const porta = 3011

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))

app.get('/', (req, res)=>{
    res.json('Rota de Busca CEP encontrada')
    const { cep } = req.query; //recebendo dado do front
    console.log("Dado Recebido " + cep)
})