import express from 'express';

const app = express();

app.get('/',(req,resp)=>{
    return resp.send("Hello")
})

app.listen(3333);