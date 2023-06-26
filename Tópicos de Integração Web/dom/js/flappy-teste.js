
const passaro = document.querySelector('[flpy-passaro]')
const alturaMaxima = -160
const alturaMinima = 160
const alturaInicialPassaro = 0
let alturaPassaro = alturaInicialPassaro
passaro.style.top = `${alturaInicialPassaro}px`

const intervaloQueda = 5 //ms
let podeVoar = true
const alturaVoar = 10

function tirarPX(tamanho){
    const x = parseInt(tamanho.split('px')[0])
    return x
}

function passaroCai(altura){
    if(podeVoar){
        alturaPassaro += altura

    if(alturaPassaro >= alturaMinima){
        alturaPassaro = alturaMinima
        podeVoar = false
        ReiniciarJogo()
    }
    
    passaro.style.top = `${alturaPassaro}px`
    }
}

const PassaroVoa = (altura) => {
    document.body.onkeyup = function(e) {
        let isSpaceKey = e.key ===" " || e.key ==='Space' || e.key === 32 //armazena o valor true se espaço for apertado

        if(podeVoar && isSpaceKey){
                alturaPassaro -= altura
        }
        
        if(alturaPassaro <= alturaMaxima){
            alturaPassaro = alturaMaxima
            podeVoar = false
            ReiniciarJogo()
        }
    
        passaro.style.top = `${alturaPassaro}px`
        }
}


function ReiniciarJogo() {
    console.log('Acabou')
}
setInterval(passaroCai(alturaVoar), 1000)
setInterval(() => passaroCai(alturaVoar), 1000)


setInterval(()=> {
    const cano = document.querySelector('[flpy-cano]')
    const style = getComputedStyle(cano)
    let left = style.getPropertyValue('left')
    left+= 10
    console.log(left)
    console.log(style.getPropertyValue('left'))
}, 1*1000)
PassaroVoa(alturaVoar)