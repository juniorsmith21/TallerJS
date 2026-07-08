class Animal{
especie;
sonido;
constructor(especie,sonido){
    this.especie=especie;
    this.sonido=sonido;

}
informacion(){
    return `Especie: ${this.especie}, Sonido: ${this.sonido}`
}
}

class Perro extends Animal{
color;
constructor(especie,sonido,color) {
    super(especie,sonido)
    this.color=color
}
informacion(){
return `${super.informacion()}, Color: ${this.color}`

}

}

let perrito=new Perro("Bigul","Guau guau", "Cafe")
console.log(perrito.informacion());
