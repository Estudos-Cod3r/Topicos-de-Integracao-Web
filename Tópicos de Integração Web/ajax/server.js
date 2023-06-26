//Responsável por prover dados estáticos e ter os serviços necessários para back

const bodyParser = require('body-parser')
const express = require('express')
const app = express() //instanciado

//Middleware - função executada quando determinada requisição chegar - pode ser aplicado a um padrão de url ou a todas reqs que chegam no servidor
app.use(express.static('.')) //Dentro da pasta atual, onde o arquivo server.js está, ele sirva todos os arquivos estáticos dali
//Precisa dessa linha pra funcionar, atualmente

app.use(bodyParser.urlencoded({extended : true})) //interpreta formato a partir do submit de um formulário
//Será para qualquer requisição
//app.use('/teste', bodyParser{........}) assim seria para uma requisição a partir de /teste, por exemplo
app.use(bodyParser.json()) //transforma json em obj


//app.get('/teste', (req, res) => res.send(new Date)) //função middleware


const multer = require('multer')

const storage = multer.diskStorage ({
    //Objeto tanto da pasta que vai salvar quanto para personalizar o nome do arquivo
    //No upload de arquivos normalmente tu salva eles em pastas em não bds
    destination: function (req, file, callback) {
        //callback(null, '.') //o segundo param é a pasta de destino para salvar o arquivo ('.' é a pasta atual)
        callback(null, './upload') //Teria de criar a pasta "upload" para ser usada
    },
    filename: function (req,file,callback){
        callback(null, `${Date.now()}_${file.originalname}`) //segundo param é o nome padrão para salvar o nome do arquivo
    }
})


const upload = multer({ storage }).single('arquivo') //o nome do arquivo, na requisição, será como 'arquivo' - que é exatamente o nome do campo input em xmlhttprequest2

//Rota que recebe req do tipo upload, usando multer
app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro')
        }
        
        res.end('Concluído com sucesso')
    }) 
})

//fetchapi2
//precisa do body-parser configurado
app.post('/formulario', (req,res) => {
    res.send({
        ...req.body, //tá devolvendo tudo o que veio na resp como obj
        id: 1
    })
})

//axios2
app.get('/parOuImpar', (req,res)=>{
    //Formas de receber dados com o express
    //req.body - e devolverá tudo de /'parOuImpar' 
    //req.query - a partir da url de consulta com ?parametros de busca
    //req.params - daria para colocar '/parOuImpar/:numero' - o params pegaria esse numero diretamente na url - já o query necessita duma url difrente, com /parOuImpar?numero=algo
    const par = parseInt(req.query.numero) % 2 === 0 //se é par(0) ou ímpar(1)
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8080, () => console.log('Executando'))
//npm start dentro da pasta ajax
//caso a porta 8080 já esteja em uso, podemos usar outra porta ou
//  ps -ax no terminal
//lista de processos
//kill - 9 nºprocesso
//ou só reiniciar a máquina