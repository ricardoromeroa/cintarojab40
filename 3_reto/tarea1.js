class Maestro {
    constructor(califs) {
        this.califs = califs;
    }
    calcularPromedio() {
        let sumaTotal = 0;
        for(let i = 0; i < this.califs.lenght; i++) {
            sumaTotal = sumaTotal + this.califs[i];
        }
        return sumaTotal / this.califs.lenght
    }
    
}

class MaestroFisica extends Maestro {
    constructor(califs, antiguedad) {
        super(califs);
        this.antiguedad = antiguedad;
    }    
}

class MaestroMusica extends Maestro {
    constructor(califs, edad) {
        super(califs);
        this.edad = edad;
    }
}

const _MaestroFisica = new MaestroFisica([10,9,8,8], 5 + " años")
console.log(_MaestroFisica);
console.log(_MaestroFisica.calcularPromedio());


const _MaestroMusica = new MaestroMusica([8,8,7,6], 25 + " años")
console.log(_MaestroMusica);
console.log(_MaestroMusica.calcularPromedio());




