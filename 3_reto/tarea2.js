class Construccion {
    constructor (numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
}



class Casa extends Construccion {
    constructor(largo, ancho) {
        super(largo, ancho);

    }
}

class Edificio extends Construccion {
    constructor(largo, ancho) {
        super(largo, ancho);

    }
}


const residencia = new Casa(200, 150);
console.log(Casa);

