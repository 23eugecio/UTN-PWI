/*
PRACTICO 1 
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor." 
*/


let edad =prompt('ingrese su edad')

if (edad <0 ){
    console.log ('Edad no válida.')}

else if (edad <13 ){
    console.log('Eres un niño.')}

else if (edad <13 && edad >17 ){
    console.log('Eres un adolescente.')
}
else if (edad <18 && edad >64){
    console.log('Eres un adulto.')
}
else if (edad <65){
    console.log('Eres una persona mayor.')
}


