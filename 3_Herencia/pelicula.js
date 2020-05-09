const { Largometraje } = require("./largometraje");

// const prueba = new largometraje();

class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, cast, tema,) {
        super(titulo, duracion, director);
        this.cast = cast;
        this.tema = tema;
        this.precio = "3"
    }
}

const mulan = new Pelicula("Mulan", 120, "Tony Bancroft y Barry Cook", "mulan, Mushu", "Infantil");

const spiderman = new Pelicula
("Spiderman", 100, "Desconocido", ["Peter Parker, Tia May"], "acción")


console.log(spiderman);
// console.log(mulan);

module.exports = {
    mulan, spiderman
}