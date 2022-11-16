import React from "react";
import "./App.css";

function App() {
  const [form, setForm] = React.useState({
    nome:'',
    email:''
  })

  function handleSubmit(event){
    event.preventDefault()
    console.log(event)
  }
  function handleChange({target}){
    const {id, value} = target
    // O Couchete do id é para o react entender que é uma variável id, criada na linha acima
    setForm({...form, [id]:value})
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
      <p>Meu Nome é: {form.nome}</p>
      <p>Meu Email é: {form.email}</p>
    </form>
  );
}

export default App;
