class Forma {
    calcularArea() {
       
    }
}

class Circulo extends Forma { 
    radio;

    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return  Math.PI * this.radio * this.radio;
    }
}


class Triangulo extends Forma {
    base;
    altura;

    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}


let miCirculo = new Circulo(20);
let miTriangulo = new Triangulo(25, 10);

console.log("Área del círculo:", miCirculo.calcularArea());
console.log("Área del triángulo:", miTriangulo.calcularArea());
