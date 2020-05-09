alert("funciona!");

// Variables primitivas
var string = "Ricardo";
var number = 24;
var boolean = true;

// Variables Compuestas
var array = [1, 2, 3, 4, 5, 6, 7, 8];

// JSON
// JavaScript
// Object
// Notation


var auto = {
    color: "rojo",
    velocidad: 180,
    ruedas: 4,
    motor: "V10",
    deportivo: true,

    //Metodos
    arranca: function() {
        alert("auto arranca");
    },
    frena: function() {
        alert("el auto frena");
    },
    dobla: function() {
        alert("el auto dobla");
    },
} 

console.log(auto);
console.log(auto.color);
console.log(auto.ruedas);
console.log(auto.velocidad);

var perro = {
    nombre: "Ayudante de santa",
    raza: "galgo",
    color: "marrón",
    ladrar: function() {
        alert(this.nombre + " ha ladrado")
    }
}

console.log(perro);
perro.ladrar();
