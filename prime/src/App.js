import React from 'react'; // Importando react

const BemVindo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a) {props.nome} tenho {props.idade} anos</h2>
        </div>
    )
}

function App(){ // Criando função
    return (
        <div>
            <BemVindo nome="Matheus" idade="10"/>
            <BemVindo nome="Amanda" idade="24"/>
        </div>
    );
}

export default App; // Exportar para Index.js