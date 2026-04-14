class Book{
titulo;
autor;
añoPublicacion;
constructor(titulo,autor,añoPublicacion){
    this.titulo=titulo;
    this.autor=autor;
    this.añoPublicacion=añoPublicacion;

}
informacion(){
    return `Titulo: ${this.titulo}, autor: ${this.autor}, año de publicacion:${this.añoPublicacion}`
}

}
class LibroE extends Book{
precioLibro;
constructor(titulo,autor,añoPublicacion,precioLibro) {
    super(titulo,autor,añoPublicacion)
    this.precioLibro=precioLibro;
    
}

informacion(){
    return `${super.informacion()}, precio del libro: ${this.precioLibro}`
}


}

let librito=new LibroE("Los magos ", "Rodri", 2011, 96500)
console.log(librito.informacion());
