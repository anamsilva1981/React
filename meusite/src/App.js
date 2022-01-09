import React from 'react'; // Importando React

const Bemvindo = () => <h2>Bem-Vindo(a)</h2>

function App(){ // Criando função 
    return (
    <div>
        Olá Mundo!
        <Bemvindo/>
        <h1>Curso React</h1>
    </div>
    );
}

// Exportando a função para acessar em outro lugar este componente
export default App;