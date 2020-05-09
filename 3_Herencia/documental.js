const { Largometraje } = require("./largometraje");

class Documental extends Largometraje {
    constructor(titulo, duracion, director, patrocinador, productor) {
        super(titulo, duracion, director);
        this.patrocinador = patrocinador;
        this.productor = productor;
        this.precio = "5"
    }
}

const hitler = new Documental("Hiter", 60, "desconocido", "History Channel", "Sony");

// console.log(hitler);


// camelCase => Functions, 
// PascalCase => Clases
// snake-case => CSS

module.exports = {
    hitler
}