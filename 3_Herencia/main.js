// Herencia Una propiedad que trasciende


// Super clase / Clase padre
class Mascota {
    constructor (nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas;

    }       
}

// Clase hijo / sub-clase
class Perro extends Mascota {
    constructor(nombre, patas, ladra, cola) {
        super(nombre, patas);
        this.ladra = ladra;
        this.comida = "croquetas para perro";
        this.cola = cola;
    }
}

class Serpiente extends Mascota {
    constructor(nombre, patas, color, venenosa) {
        super(nombre, patas);
        this.color = color;
        this.veneno =  venenosa;
    }
}

const pluto = new Perro("Pluto", 4, true, true);

console.log(pluto);

const kaa = new Serpiente("Kaa", 0, "Verde", false);

console.log(kaa);
