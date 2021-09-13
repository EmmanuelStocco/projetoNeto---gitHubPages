import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //função para impedir q o form faça o reload
  const submitHandler = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("Handler: " + data.nome)
    console.log("Handler: " + data.cep)
  
    fetch(`http://localhost:3011/?cep=${data.cep}`) //nativo //chamando back
    .then(response => response.json())
    .then(console.log())
    .catch(error => console.error)
  }

  return (
    <div className="container">
        <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" name="nome" className="form-control" placeholder="nome"></input>
              <input type="text" name="cep" className="form-control" placeholder="cep"></input>
            </div>
            <button type="submit" className="btn btn-success"> Consultar Cep </button>
        </form>
    </div>
  )
}

export default App;
