/*
4)
Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt. El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:
1: Lunes
2: Martes
3: Miércoles
4: Jueves
5: Viernes
6: Sábado
7: Domingo
Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido."
*/

let dia = number (prompt('Dia de la Semana'))

if(dia <0 || dia >8){
    console.log('Número no válido.')
}
else if(dia === 1){
    console.log('Lunes')
}
else if(dia === 2){
    console.log('Martes')
}
else if(dia === 3){
    console.log('Miércoles')
}
else if(dia === 4){
    console.log('Jueves')
}
else if(dia === 5){
    console.log('Viernes')
}
else if(dia === 6){
    console.log('Sabado')
}
else if(dia === 7){
    console.log('Domingo')
}

