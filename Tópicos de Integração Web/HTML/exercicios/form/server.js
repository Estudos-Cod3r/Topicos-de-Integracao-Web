/*Esse arquivo deveria estar junto dos de backend*/
//lembrando de, neste pasta, criar o package .json => npm init -y
//instalar expressJS => npm i --save express@4.16.3 body-parser@1.18.2 -E (versão exata)
//rodar com node server.js
//para nodemon: npm i --save-dev nodemon
//p/rodar nodemon server.js ou, se server.js for o principal - somente nodemon

const express = require('express')
const app = express() //instância e atribui ele
const bodyParser = require('body-parser') //uma vez que os dados são submetidos, realizar um parser (transformação) no corpo da requisição (request) e jogar esses dados em request.body

app.use(bodyParser.urlencoded({extended: true})) //faz o parsin - senão retorna valor undefined
                   
//Usar post invés de get - o retorno é https e, portanto, não fica no histórico da url a requisição feita pelo usuário, com os dados
        //req middleware
app.post('/usuarios', (req,resp) => {
    console.log(req.body) //mostra os dados pegos
    resp.send('<h1>Parabéns, Usuário incluído!</h1>') //manda no console do servidor
})
                //Parâmetro usa dois pontos id :id - será dinâmico
app.post('/usuarios/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>') //manda no console do servidor
})



app.post('/usuarios', (req,resp) => {
    console.log(req.body) //mostra os dados pegos
    resp.send('<h1>Parabéns, Usuário incluído!</h1>') //manda no console do servidor
})


app.listen(3003) //a porta do formulário que ele deve ouvir

//executar server no terminal com node server.js
//lembrar do nodemon
