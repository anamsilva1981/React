import React, { Component } from 'react';//Importa componente 

class App extends Component{

    constructor(props){//Construtor do componente // Recebe as props
        super(props);//Acessar as informações e usar do componente pai
        this.state = {//Inserir todas as STATES relacionadas ao App
            nome: 'Matheus',
            contador: 0 //Contador
        };

        this.aumentar = this.aumentar.bind(this);//Faz com que ele enxergue e consiga utilizar tudo dentro da função "aumentar(){"
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;//A cada click será somado +1
        state.nome = 'Jose';//Altera o nome no aumento do contador
        this.setState(state)//Atualiza a State passando a State
    }

    diminuir(){
        let state = this.state;
        if(state.contador ===0){
            alert('Opa chegou a zero');//SE chegar ao zero gera um alerta
            return;
        }

        state.contador -= 1;//Reduz a cada redução
        this.setState(state)//passando o valor da state atualizada
    }


    render(){
        return(
            <div>
                <h1>Contador</h1>
                {this.state.nome}{/*Chama o nome L08*/}
                <h3>{/* Criando botões */}       
                    <button onClick={this.diminuir}>-</button> 
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>         

            </div>
        )
    }
}
export default App;//Exporta componente