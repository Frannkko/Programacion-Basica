var num1=10

if (true) {
    let num2=5
    console.log("num2 (dentro del bloque IF)", num2)
    console.log("num1 (dentro del bloque IF)",num1)
}
let num2=20

console.log("num2 (fuera del bloque IF)", num2)
console.log("num1 (fuera del bloque IF)", num1)

//declaración de constante llamada IVA

const IVA=0.19
console.log(IVA)

//operadores aritméticos
console.log('suma:',num1+num2)
console.log('resta:',num1-num2)
console.log('multiplicación:',num1*num2)
console.log('división:',num1/num2)
console.log('ecuación:',((num1/num2)*2+num1))

//operadores de asignación compuestos
let a=5

a+=2//a=a+2
console.log(a)
a-=1//a=a-1
console.log(a)
a*=2//a=a*2
console.log(a)
a/=3//a=a/3
console.log(a)

//imprimir en el documento
document.write('<h2>Hola desde Js</h2>')

//operadores de comparación
let a1=10
let a2=20
console.log("a1: ", a1)
console.log("a2: ", a2)
console.log("Con MAYOR QUE: ", a1>a2)
console.log("Con MENOR QUE: ", a1<a2)
console.log("Con IGUAL QUE: ", a1==a2)
console.log("Con DIFERENTE QUE: ", a1!=a2)
console.log("Con MAYOR O IGUAL QUE: ", a1>=a2)
console.log("Con MENOR O IGUAL QUE: ", a1<=a2)

//operadores lógicos
// && (Conjunción - AND - Y)
// || (Disyunción - OR - O)

let esAdulto=true
let tienePermiso=false
let puedeEntrar=esAdulto && tienePermiso
let puedeSalir = esAdulto || tienePermiso

console.log("¿Puede entrar?", puedeEntrar)
console.log("¿Puede salir?", puedeSalir)
console.log("¿Puede entrar NEGADO?", !puedeEntrar)
console.log("¿Puede salir NEGADO?", !puedeSalir)

//Template Literals

const nombrecito = "Ana";
const age = 25;

const result = `hola ${nombrecito}, tienes ${age} años`;
console.log(result);

//Concatenación
let nom="Franklin"
let ape="Guzmán"
let NombreCompleto = nom + " " + ape
console.log("Mi nombre completo es: ", NombreCompleto)