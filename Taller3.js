class Vehiculo{
marca;
modelo;
año;
constructor(marca,modelo,año){
this.marca=marca;
this.modelo=modelo;
this.año=año;
}
informacion(){
    return `La marca del vehiculo es: ${this.marca}, su modelo es: ${this.modelo}, y su año es: ${this.año}`
}


}
class Automovil extends Vehiculo{
    puertas;
    constructor(marca,modelo,año,puertas){
        super(marca,modelo,año)
        this.puertas=puertas

    }
    informacion(){
        return `${super.informacion()}, Numero de puertas: ${this.puertas}`
    }
    NoPuerta(puerta){
        return this.puertas=puerta;

    }


}
let automovilito=new Automovil("Hyundai","accent",2015,9)
console.log(automovilito.informacion());
automovilito.NoPuerta(6);
console.log(automovilito.informacion());

