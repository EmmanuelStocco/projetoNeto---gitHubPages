import React, { useState } from 'react'
import './App.css';

import CepConsultado from './CepConsultado.js'

function App() {
  const [ evento, setEvento] = useState([])

  //função para impedir q o form faça o reload
  const submitHandler = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("Handler: " + data.nome)
    console.log("Handler: " + data.cep)
  
    fetch(`http://localhost:3011/?cep=${data.cep}`) //nativo //chamando back
    .then(response => response.json())
    .then(data => {
        const array = convertToArray(data)  
        setEvento(array)
    })
    .catch(error => console.error)
  }

  const convertToArray = (obj) => {
    const arr = [obj]
    console.log("conversão em array: " , arr)
    return arr
  }

  return (
    <div className="container">
        <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" name="nome" className="form-control" id="nome" placeholder="nome"></input>
              <input type="text" name="cep" className="form-control" id="cep" placeholder="cep"></input>
            </div>
            <button type="submit" id="btn-consultar" className="btn btn-success"> Consultar Cep </button>
        </form>

        <CepConsultado evento={evento}/>
    </div>
  )
}

export default App;
