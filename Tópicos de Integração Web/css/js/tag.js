
const colors = {
    p:'#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main:'#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){ //Pega o nome da tag e compara com as de cima
        return this[tag] ? this[tag] : this.padrao //retorna a cor associada a ela se a mesma existir, senão retorna padrão
    }

}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.borderColor = colors.get(tagName)
    if(!elemento.classList.contains('nolabel')){ //Adicionar tal classe no html
        const label = document.createElement('label') //cria um elemento html
        
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName

        //Insere o label dentro de box(elemento html), antes do primeiro elemento contido na mesma
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})