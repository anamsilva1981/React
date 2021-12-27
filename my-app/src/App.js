function App() {

  const nome = "Ana"; /*Criando a constante*/

  const usuario = { //Criação de um objeto
    idade: 35,
    profissao: "Analista de Sistema"
  }

  function formatarNome(nome){ /**Criando a função */
    return nome;
  }

  function FormatarDadosUsuario(usuario){ //Criando função para apresentar objeto
    return " tem " + usuario.idade + " anos de profissão " + usuario.profissao + ".";
  }

  return ( // Dados que serão apresentados pela função
    <div>
      <h1> Colaborador {formatarNome(nome)} {FormatarDadosUsuario(usuario)}</h1>
    </div>
  );
}

export default App;
