const express = require('express')
const server = express()
const cors = require('cors')
const Correios = require('node-correios');
const correio = new Correios();
 
const porta = 3011

server.use(cors())

server.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))

server.get('/', (req, res)=>{
    res.json('Rota de Busca CEP encontrada')
    const { cep } = req.query; //recebendo dado do front
    console.log("Dado Recebido " + cep)

    correio.consultaCEP( {cep: cep}) //função no cep correios
    .then( result => {
        res.send(result)
        console.log(result)
            console.log("Sucesso na consulta")
    })
    .catch(error => {
        console.log('deu erro em ' + error)
    })
})