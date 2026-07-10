class Banco {
    nombre;
    sucursales;

    constructor(nombre) {
        this.nombre = nombre; 
        this.sucursales = [];
    }

   
    agregarSucursal(sucursal){
        this.sucursales.unshift(sucursal)

    }

    eliminarSucursal(sucursal){
        this.sucursales=this.sucursales.filter(b=>b !==sucursal) /**/ 

    }
    
 mostrarSucursales() {
        console.log(`Sucursales del banco ${this.nombre} :`);
        this.sucursales.forEach(s => console.log(s));
    }
}



const banquito = new Banco("Nu");


banquito.agregarSucursal("Popayan");
banquito.agregarSucursal("Pasto");
banquito.agregarSucursal("Cali");
banquito.mostrarSucursales();
banquito.eliminarSucursal("Pasto");
banquito.mostrarSucursales();
banquito.agregarSucursal("Pereira")
banquito.agregarSucursal("Barranquilla")
banquito.agregarSucursal("Medellin")


console.log(banquito.sucursales[0]);
