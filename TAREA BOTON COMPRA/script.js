
const contenedorHTML = document.querySelector('.contenedor')
const btnComprarHTML = document.getElementById('.btn-comprar')
const btnSumarHTML = document.querySelector('.btn-incrementar')
const spancontadorHTML = document.getElementById('contador')
const btnRestarHTML = document.querySelector('.btn-decrementar')
const spanNumeroHTML = document.getElementById('numeroMostrado')
const renderizarH2HTML = document.querySelector('.boton de compra')

let contador = 1;

spanNumeroHTML.innerText = contador;

const handleSumarHTML = () => {
    if(contador < 1){
        estadoContador =+1;
        spanNumeroHTML.innerText = contador;
        renderizarH2HTML()
    };
};

const handleRestarHTML = () => {
    if(contador > 1){
        contador -=1;
        spanNumeroHTML.innerText = contador;
        renderizarH2HTML()
    }
    else{
        contenedorHTML.setAttribute('hidden', '')
        btnComprarHTML.removeAttribute('hidden', '')
    }
};

const handleComprarHTML = () => {

    btnComprarHTML.removeAttribute('hidden', '')
    contenedorHTML.setAttribute('hidden', '')
    renderizarH2HTML()
};

btnSumarHTML.addEventListener('click', handleSumarHTML)
btnRestarHTML.addEventListener('click', handleRestarHTML)
btnComprarHTML.addEventListener('click', handleComprarHTML) 


console.log(contador)
