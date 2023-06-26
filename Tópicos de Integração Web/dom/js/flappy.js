function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

//Cria Barreira
//Método construtor
//Se for a segunda (que fica de ponta cabeça) terá reversa como true - tal definirá se primeiro será o corpo ou a borda a ser criado
function Barreira (reversa = false) {
    //Essa função será instanciada, tal qual um objeto/classe
    this.elemento = novoElemento('div','barreira')
    //Lembrando que o this torna o atributo acessível fora da função
    //com const ou let se torna privado

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div','corpo')

    //Lembrando que a reversa é a de ponta-cabeça, a "pendurada"
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//const b = new Barreira()
//b.setAltura(200)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

//altura(do jogo), abertura entre barreiras e pos x
function ParDeBarreiras(altura,abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras')
    
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento) //Lembrando que o .elemento quem representa o obj do DOM
    this.elemento.appendChild(this.inferior.elemento)

    //Sortear local da abertura da barreira
    this.sortearAbertura = () => {
        //O tamanho da abertura é fixo
        //Calcular altura/pos da borda de um dos lados
        //E subtrair da abertura para encontrar a altura/pos do outro lado(barreira)
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior //Altura total - abert. - altura da primeira barreira

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

//const b = new ParDeBarreiras(700,400,400)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

//Todas dimensões do jogo, a abertura das barreiras e o espaço entre elas
//notificarPonto é uma função que avisará quando alguma barreira passar pelo centro da tela/jogo - e aí adicionar um ponto
function Barreiras (altura, largura, abertura, espaco, notificarPonto){
    this.pares = [ //as barreiras começarão exatamente ao final da largura do jogo
        new ParDeBarreiras(altura,abertura, largura),
        new ParDeBarreiras(altura,abertura, largura + espaco), //Espaçamento entre barreiras
        new ParDeBarreiras(altura,abertura, largura + (espaco * 2)),
        new ParDeBarreiras(altura,abertura, largura + (espaco * 3)),
    ]

    const deslocamento = 3 //passo para deslocamento horizontal das barreiras
    this.animar = () =>{
        this.pares.forEach( par =>{
            par.setX(par.getX() - deslocamento)

            //Quando o elemento sair da tela do jogo
            if (par.getX() < -par.getLargura()){ //Quando x for 0 (left = 0, exatamente a largura da janela para a barreira)
                par.setX(par.getX() + espaco * this.pares.length) 
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
                    //Se ele ACABOU de cruzar o meio, ou seja, em seguida do passo dele passar o meio, em que sua pos+passo é igual ou maior que 
                    //a pos do meio e a pos sozinha é menor que ele

            cruzouOMeio && notificarPonto()
            //Se a primeira parte for verdadeira ele executa a segunda
            //Seria o mesmo que:
            //if(cruzouOMeio) notificarPonto
        })

    }
}

function Passaro(alturaJogo){
    let voando = false

    this.elemento = novoElemento('img','passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () =>{
        const novoY = this.getY() + (voando ? 8 : -5)
                                    //Se estiver voando sobe 8 senão cai 5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight //Img quadrada, altura - 60px, dando a altura do pássaro para não passar nada da tela

        if(novoY <= 0){
            this.setY(0)
        }else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

   this.setY(alturaJogo / 2) //altura em pixels
}


function Progresso() {
    this.elemento = novoElemento('span', 'progresso')

    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos
    }

    this.atualizarPontos(0)

}


//const areaDoJogo = document.querySelector('[wm-flappy]')

//const passaro = new Passaro(700)
//const barreiras = new Barreiras(700,1200, 350, 400)

//areaDoJogo.appendChild(passaro.elemento)
//areaDoJogo.appendChild(new Progresso().elemento)
//barreiras.pares.forEach(par =>{
//    areaDoJogo.appendChild(par.elemento) //adicionar inidividualmente cada par à div do jogo 
//})

//setInterval(() => {
//    barreiras.animar()
//    passaro.animar()
//}, 20)


//Gerenciamento de colisão de forma genérica
//Verificar pos horizontal e vertical se há sobreposição em ambos
function estaoSobrepostos (elementoA, elementoB){
    //Pegar o retângulo/boundingBox dos elementos para comperação
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left 
                    && b.left + b.width >= a.left

    /*       |  left     |                |
        tela |-------->  |     elemA      | Borda direita do elemento (tamanho)
             |           |left+largura -> |
    /*       |  left             |                |
        tela |-------->          |     elemB      | Borda direita do elemento (tamanho)
             |                   |left+largura -> |
                            Lado esquerdo 
                             do B

        Ou seja, se o lado direito do elemA estiver para depois da borda esquerda do elemB
        e da mesma forma, quando a borda direita do elemB estiver depois da borda esquerda
        do elemA - significa que eles estão ocupando o mesmo espaço horizontal
    */

    const vertical = a.top + a.height >= b.top  
                    && b.top + b.height >= a.top
    //A mesma lógica se aplica na vertical
    
    return horizontal && vertical //true se ambos forem true
}

function colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(par => {
        if(!colidiu){
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento,inferior) //se sobrepõe um ou outro
        }
    })
    return colidiu
}



//Quem vai controlar o jogo
function FlappyBird(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura,largura, 200, 400, 
        ()=> progresso.atualizarPontos(++pontos)) //incrementa antes de passar para a função
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(passaro.elemento)
    areaDoJogo.appendChild(progresso.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () =>{
        //loop do jogo num temporizador
        const temporizador =  setInterval(()=>{ //quando o usuário perder o temporizador parará
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro,barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}

new FlappyBird().start()