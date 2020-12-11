import express, { json } from 'express';

const app = express();

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

app.get('/',(req,resp)=>{
    resp.json({"message": "hello"})
})

app.post('/',(req,resp)=>{
    const {ribbon, alphabet, states, transitions, initialState, finalStates}:Response = req.body;


    let estadoAtual = '';

    if(estadoAtual == ''){
        estadoAtual = initialState;
    }

    for(let i = 0; i < ribbon.length; i++){
        if (alphabet.includes(ribbon[i])){
            pegarEstadoFinal(ribbon[i]);
        }else{
            resp.status(400).json({"Message": "Recusado"});
            return;
        }
    }

    if(estadoAtual == finalStates){
        resp.json({"Message": "Aceito"})
    }else{
        resp.status(400).json({"Message": "Recusado"});
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
        } catch (error) {
            console.log("reject")
        }
    }

    

    resp.json({"ok": true})
})


app.listen(3333);
 