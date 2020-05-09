// 2000 => Internet Explorer Microsoft -> 2011

// Navegadores
// Chrome, Firefox, Safari, Opera
// ES6 = EcmaScript 6 (JS Moderno) "2015"

// JS
var nombre = " Ricardo"

// ES6

let x = 5; // Es permitido cambiar el valor
const y = 3.1416; // No es permitido reemplazar su valor


// String template
console.log(`Hola mi nombre es ${nombre} y mi edad es ${x}`);

// function MiFuncion() {
//    return "mi función se ejecutó";
//}

// var valor = MiFuncion();
// console.log(valor);

const suma = (a, b) => a + b;


// Ejercicio 1 Campus

const resultado = suma(5, 9);
console.log(resultado);

const farenheitToCelsius = (gradosF) => (gradosF-32) * 5/9;

console.log(farenheitToCelsius(80));


// Ejercicio 2 campus
const evaluateLetter = (x) => {
    if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        return "Vocal"
    } else {
        return "Consonante"
    }
}

console.log(evaluateLetter("u"));

let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    console.log(`array en el indice ${i} = ${array[i]}`);
}

// Caracteristicas de objetos
// Propiedades => llave: valor(string, número, booleano, arreglos, objetos)
// Método => Acciones que puede hacer nuestro objeto
// 

// Objeto Literal
// let computadora = {
//    color: "blanco",
  //  marca: "hp",
   // encendida: true,

    // Metodo
    // Scope => Alcance de una variable
    //obtenerInfo: () => {
      //  return `Esta computadora es ${this.color}, marca ${this.marca}`
   // },
//}

// programación funcional
// programación imperativa

 // console.log(computadora.obtenerInfo());


let myPenguin = {
    character: "Roy and Silo",
    origin: "And tango Makes Three",
    author: "Peter Parnell and Justin Richardson",
    notes: "They are slightly anthropomorphized, slightly fictionalized chinstrap penguins",

    obtenerInfo: () => `Hola, soy un pinguino y mi nombre es ${myPenguin.character}`
    
}

myPenguin.puedeVolar = false;

console.log(myPenguin);

myPenguin.graznar = () => console.log("kaww kaww!!");


console.log(myPenguin);
myPenguin.graznar();


