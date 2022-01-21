import React, { Component } from 'react';//Importa componente 

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
         };
    }

    componentDidMount(){//Monta um componente para que ele funcione
        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate(){
        console.log('Atualizou!!');
    }

    shouldComponentUpdate(){ // Retorna True ou Falso

    }


    render(){
        return(
            <div>
                <h1>Meu projeto {this.state.hora}</h1>
                
            </div>
        );
    }
}
export default App;//Exporta componente