/* 1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre 


function decirNombre (nombre){
    alert('Hola ' + nombre)
}
decirNombre('Euge') 


2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta


function saludar(nombre){
    return let = ('hola ' + nombre)
}
alert(saludar('Euge'))


3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b 

function sumar(a,b){
    let suma=Number(a)+Number(b);
    return suma
}
alert(sumar(2,4)) 


4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

function restar (a,b){
    let resta=Number(a)-Number(b);
    return resta
}
alert(restar(10,5)) 

5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 

function calcular (operación,a,b){
    let resultado
    if(operación === '+'){
        resultado(Number(a)+Number(b));
    }
    else if(operación === '-'){
        operación(Number(a)-Number(b));
    } else{
        resultado=null;
    }
    return resultado
    }
alert(calcular('',5,10))


6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola 

function contarHasta(Number){
    for(iterador=1, iterador<=Number, iterador+1);
        console.log(Number)
}
ContarHasta(15)  */