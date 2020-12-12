import express, { json } from 'express';

import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

interface Response{
    ribbon: string[],
    alphabet : string[],
    states : string[],
    transitions : {
        state: string,
        alphabet: string,
        goState: string
    }[],
    initialState: string,
    finalStates: string,
}

let error = false;




app.post('/',(req,resp)=>{
    const {ribbon, alphabet, states, transitions, initialState, finalStates}:Response = req.body;

    if(!ribbon){
        return resp.status(200).json({erro: "Palavra vazia"})
    }

    if(!states){
        return resp.status(200).json({erro: "Estados vazio"})
    }

    if(!transitions){
        return resp.status(200).json({erro: "Transições vazia"})
    }

    if(!initialState){
        return resp.status(200).json({erro: "Estado inicial vazio"})
    }

    if(!finalStates){
        return resp.status(200).json({erro: "Estado final vazio"})
    }

    let estadoAtual = '';
    let estadosAucancaveis = [initialState];

    if(estadoAtual == ''){
        estadoAtual = initialState;
    }

    for(let i = 0; i < ribbon.length; i++){
        if (alphabet.includes(ribbon[i])){
            pegarEstadoFinal(ribbon[i]);
            if(error){
                resp.json({"message": "recusada"});
                return;
            }
        }else{
            resp.json({"message": "recusada"});
            return;
        }
    }

    states.splice(0,1);

    if(estadoAtual == finalStates){
        resp.json({"message": "aceita"})
        console.log(`Estados inalcançaveis ${states}`)
    }else{
        console.log(`Estado morto ${estadoAtual}`)
        resp.json({"message": "recusada"});
    }

    function pegarEstadoFinal(i: string){
        try {
            const arrayComEstadoAtual = transitions.filter(function(item) {
                return item.state == estadoAtual;
            });
            
            const arrayComTransicoes = arrayComEstadoAtual.filter(function(item) {
                return item.alphabet == i;
            })
        
            const nextState = arrayComTransicoes[0].goState;

            
            estadoAtual = nextState;
            estadosAucancaveis.push(estadoAtual);
            let aux = states.indexOf(estadoAtual);
            states.splice(aux);

        } catch (error) {
            error = true;
        }
    }

    

    resp.json({"ok": true})
})


app.listen(3333);
 