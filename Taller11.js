 class BankAccount {
    constructor(numeroCuenta, titular, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito de ${monto}. Nuevo saldo: ${this.saldo}`);
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro de ${monto}. Nuevo saldo: ${this.saldo}`);
        }
    
    }

    transferir(monto, cuentaDestino) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            cuentaDestino.saldo += monto;

            console.log(`Transferiste ${monto} a ${cuentaDestino.titular}`);
        } else {
            console.log("Fondos insuficiente");
        }
    }

    mostrarInfo() {
        console.log(`Cuenta: ${this.numeroCuenta}`);
        console.log(`Dueño: ${this.titular}`);
        console.log(`Saldo: ${this.saldo}`);
    }
}



const cuentica = new BankAccount(1, "Kevin", 1000);
const cuentica1 = new BankAccount(2, "Jhorman", 500);

cuentica.depositar(200);      
cuentica.retirar(300);        
cuentica.transferir(400, cuentica1)
cuentica.mostrarInfo();
cuentica1.mostrarInfo();

