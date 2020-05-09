class Electrodomestico {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = 100;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal() {
        return "el precio Final" + ` es de  ${this.carga * this.consumoEnergetico}`; 

    }
}

const _Lavadora = new Lavadora("$500usd", "blanca", 300 + " kgs", 30 + " kgs" );
console.log(_Lavadora);
console.log(_Lavadora.precioFinal());

