class Producto {
    id;
    nombre;
    precio;

    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    informacion(cantidad) {
        return `id:${this.id}, nombre:${this.nombre}, precio: ${this.precio * cantidad}`
    }
}

class PersonalCareProduct extends Producto {
    garantia;

    constructor(id, nombre, precio, garantia) {
        super(id, nombre, precio);
        this.garantia = garantia;
    }


    informacion(cantidad) {
        return `${super.informacion(cantidad)}, garantia: ${this.garantia};`
    }
}


let producto = new PersonalCareProduct(1231, "Shampoo",20000,"1 mes garantia" );


console.log(producto.informacion(5));