/*
5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados Celsius mediante un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
Sólido: 0 grados Celsius o menos.
Líquido: entre mayor a 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida." */


let Temperatura = prompt('Intruduzca la temperatura en grados Celsius')

/* if(!Temperatura || isNaN(Temperatura)){ */
if(Temperatura === '' || Temperatura === null || isNaN(Temperatura)){
    console.log('Temperatura no válida.')
}
else {
    if(Temperatura <=0){
        console.log('Estado del agua Sólido')
}
    else if(Temperatura >0 && Temperatura <=99){
        console.log('Estado del agua Líquido')
}
    else if(Temperatura >=100){
        console.log('Estado del agua Gaseoso')
}
}
