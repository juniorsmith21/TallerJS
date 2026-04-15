class Universidad {
    constructor(nombre) {
        this.nombre = nombre;
        this.departamentos = [];
    }
    agregarDepartamento(departamento) {
        this.departamentos.unshift(departamento);
    }

    eliminarDepartamento(departamento) {
        this.departamentos = this.departamentos.filter(d => d !== departamento);
    }

    mostrarDepartamentos() {
        console.log (`Departamentos de la universidad : ${this.nombre } :`)
        this.departamentos.forEach(d => console.log(d));
    }
}


