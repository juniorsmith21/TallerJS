class Rectangulo{
ancho;
alto;
 constructor(ancho, alto) { 
    this.ancho = ancho;
    this.alto = alto;
 }

 calcularPerimetro() {
    return `Perimnetro ${(2*(this.ancho + this.alto))}`
 }
calcularArea() {
    return `area: ${(this.ancho * this.alto)}cm^2`
}
}

let rectangulito = new Rectangulo(5, 9);
console.log(rectangulito.calcularPerimetro());
console.log(rectangulito.calcularArea());

