class Empleado{
nombre;
salario;
constructor(nombre, salario) {
this.nombre = nombre;
this.salario = salario;
}
informacion() {
return this.salario*12

}

}
class Admin extends Empleado{
departamento;
bono;
constructor(nombre, salario, departamento, bono) {
    super(nombre, salario)
    this.departamento = departamento;
    this.bono = bono;

}
informacion() {
    return `Nombre :${this.nombre}, salario: ${this.salario}, departamento:${this.departamento},  el salario mas el bono es: ${this.salario*12 + this.bono}`
}

}
let gerentito = new Admin("Pedrito", 5000000, "Cauca", 500000)
console.log(gerentito.informacion())
let gerentito1 = new Admin("Geronimo", 7000000, "Antioquia", 600000)
console.log(gerentito1.informacion());
