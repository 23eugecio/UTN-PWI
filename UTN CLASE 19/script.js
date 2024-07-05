const alertar = () =>{
    alert('hola Mundo')
}


const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar


/* llamar a un elemneto por clase */
const btn3HTML = document.querySelector('.btn-3')


/* btn3HTML.addEventListener('click', alertar) */
btn3HTML.addEventListener('mouseover', alertar)