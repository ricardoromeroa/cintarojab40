// Palabras reservadas => no podemos usarlo en variables (let, const, if, for, else, var)

// Vamos a declarar una clase
class perro {
    // Método constructor
    constructor(raza, tamanio, nombre) {
        console.log("se ejecutó el constructor");
        this.raza = raza;
        this.tamanio = tamanio;
        this.nombre = nombre;
    }



    comer(comida) {
        // Colocar Comparaciones estrictas
        if (comida === "croquetas") {
            return "Perro Feliz";
        } else {
            return "Perro Triste";
        }
    }

    saludo() {
        return `Hola mi nombre es ${this.nombre}`;
    }

    getNombre() {
        return this.nombre;

    }

    getRaza() {
        return this.raza;
    }

    setNombre(nombre) {
        this.nombre = nombre;

    }
}


// Instancia de mi clase perro
const snoopy = new perro("beagle", "mediano", "Snoopy");
const scooby = new perro("Gran Danés", "Grande", "Scooby");

console.log(snoopy);
console.log(scooby);

console.log(snoopy.comer("croquetas"));
console.log(scooby.comer("tacos"));

console.log(snoopy.saludo());

console.log(snoopy.getNombre());
console.log(snoopy.getRaza());





