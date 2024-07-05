/*
3)
Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:
Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas."
*/

let eje1 = prompt('ingrese el primer lado: ')
let eje2 = prompt('Ingrese el segundo lado: ')
let eje3 = prompt('Ingrese el tercer lado: ')

if(eje1 >0 && eje2 >0 && eje3 >0){
    console.log('triangulo Equilátero')
}
else if(eje1 === eje2 || eje2 === eje3 || eje1 === eje3){
    console.log('Triangulo Isósceles')
}
else if(eje1 != eje2 && eje2 != eje3 && eje1 != eje3){
    console.log('Triangulo Escaleno')
}

