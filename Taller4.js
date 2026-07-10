class Bankacount{
    numCuenta;
    saldo;
    constructor(numCuenta, saldoInicial) {
        this.numCuenta = numCuenta;
        this.saldo = saldoInicial

    }
    depositar(monto) {
        this.saldo = this.saldo+monto

    }
    informacion() {
        console.log(`Numero de cuenta: ${this, this.numCuenta}, Tu saldo actual es: ${this.saldo}`)
    }
    retirar(monto) {
        this.saldo = this.saldo-monto

    }
}

let cuenta = new Bankacount("1465256985", 100000)
cuenta.informacion()
cuenta.retirar(5000)
cuenta.informacion()
cuenta.depositar(90000)
cuenta.informacion()
