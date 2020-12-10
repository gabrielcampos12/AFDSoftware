import express, { json } from 'express';

const app = express();

app.use(express.json());

app.get('/',(req,resp)=>{
    return resp.json({
        "Message": "Oii cabeça"
    })
})

interface Response{
    alfabeto : string,
    estados : string[],
    transicoes : {
        state: string,
        alphabet: string,
        goState: string
    }[],
    estadoInicial: string,
    estadosFinais: string[],
}

app.post('/',(req,resp)=>{
    const { alphabet, states,transitions, initialState, finalStates } = req.body;

    const fita = ['0','1'];
    let estadoAtual = '';

    const response:Response = {
        "alfabeto" : alphabet,
        "estados" : states,
        "transicoes" : transitions,
        "estadoInicial": initialState,
        "estadosFinais": finalStates
    }

    //pegar a cabeça da fita
    // pegar o estadoAtual
    //percorrer o vetor de transitions e comparar o state com o estado atual 
    //se for igual, ver se ele tem algum alphabet q seja q nem a cabeça e pegar o goState e colocar no estadoAtual
    //remover esse item da fita
   
    const cabeca = fita[0];
    
    if(estadoAtual == ''){
        estadoAtual = response.estadoInicial;
    }



    function pegarEstadoFinal(){
        const arrayComEstadoAtual = response.transicoes.filter(function(item) {
            return item.state == estadoAtual;
        })
    
        const arrayComTransicoes = arrayComEstadoAtual.filter(function(item) {
            return item.alphabet == cabeca;
        })
    
        const nextState = arrayComTransicoes[0].goState;

        fita.splice(0,1);

        return nextState;
    }


    pegarEstadoFinal();


    resp.json({"ok": true})
})


app.listen(3333);
 