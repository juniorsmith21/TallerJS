class Persona{
nombre;
edad;
pais;
constructor(nombre, edad, pais) {
this.nombre = nombre;
this.edad = edad; 
this.pais = pais;
}
informacion() {
    return `nombre: ${this.nombre}, edad: ${this.edad}, pais: ${this.pais}`
}

}
let personita1 = new Persona("Smith", 22, "Colombia")
console.log(personita1.informacion());

let personita2 = new Persona("Gerardo", 22, "EEUU")
console.log(personita2.informacion())
