function ejercicio01(){
    class Contador {
        constructor(numero){
            this.numero = numero;
        }
        get getNumero(){
            return this.numero;
        }
        set setNumero(nuevoValor){
            this.numero = nuevoValor;
        }
        incrementar() {
            this.numero++;
        }
    }
}