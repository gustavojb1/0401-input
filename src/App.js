import React from "react";
import "./App.css";

function App() {
  const formField=[
    {
      id: 'nome',
      label: 'Nome',
      type: 'text'
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email'
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password'
    },
    {
      id: 'cep',
      label: 'cep',
      type: 'text'
    },
    {
      id: 'rua',
      label: 'rua',
      type: 'text'
    },
    {
      id: 'numero',
      label: 'numero',
      type: 'text'
    },
    {
      id: 'bairro',
      label: 'bairro',
      type: 'text'
    },
    {
      id: 'estado',
      label: 'estado',
      type: 'text'
    }
  ]


  const [form, setForm] = React.useState(
    formField.reduce((acc, field)=>{
      return{
        ...acc,
        [field.id]: '',
      }
    }, {})
  )

  //o form de cima é exatamento igual ao de baixo automatizado

  // const [form, setForm] = React.useState({
  //   nome:'',
  //   email:'',
  //   senha:'',
  //   cep:'',
  //   rua:'',
  //   numero:'',
  //   bairro:'',
  //   estado:''
  // })

  const [response, setResponse]= React.useState(null)


  function handleChange({target}){
    const {id, value} = target
    // O Couchete do id é para o react entender que é uma variável id, criada na linha acima
    setForm({...form, [id]:value})
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(event)
    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(form)
    }).then(response=>{
      setResponse(response)
    })
  }

  return (
    <form onSubmit={handleSubmit}>

    {formField.map(({id, label, type})=>
    <div key={id}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={handleChange}
      />
    </div>)}
      <button>Enviar</button>
      {response&& response.ok&&<p>Formulário enviado</p>}
      <p>Meu Nome é: {form.nome}</p>
      <p>Meu Email é: {form.email}</p>
    </form>
  );
}

export default App;
