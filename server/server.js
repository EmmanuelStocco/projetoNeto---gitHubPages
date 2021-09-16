const express = require('express')
const server = express()
const cors = require('cors')
const Correios = require('node-correios');
const correio = new Correios();
 
const porta = 3011

server.use(cors())

server.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))

server.get('/', (req, res)=>{
    res.send("Rota da raiz encontrada")
    console.log('Rota raiz encontrada')
})

server.get('/autores', (req, res)=> {
    res.send('Rota de autores encontrada')
})

server.get('/editoras', (req, res)=> {
    res.send('Rota de Editoras encontrada')
})

server.get('/livros', (req, res)=> {
    res.send('Rota de livros encontrada')
})