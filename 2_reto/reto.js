class persona {
    constructor(nombre, apeP, apeM, edad, diaN, mesN, sexo, altura, peso) {
        this.nombre = nombre;
        this.apeP = apeP;
        this.apeM = apeM;
        this.edad = edad;
        this.diaN = diaN;
        this.mesN = mesN;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }

    // Metodos

    imc() {
        return `el imc ${this.peso / Math.pow(this.altura, 2)}`;
    }

    calcular() {
        if (this.edad >= 18) {
            return `es mayor de edad `;
        } else {
            return `es menor de edad`;
        }
    }
    rfc() {
        
    }
}

const jose = new persona('jose', 'soler', 'escala', 33, 03, 06, 'h', 1.8, 75);

console.log(jose.imc());
console.log(jose.calcular());


console.log(persona.length);
console.log(jose.nombre);

// let rfc =


