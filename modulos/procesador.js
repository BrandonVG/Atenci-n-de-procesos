let aux = null;
class Procesador{
    constructor(){
        this.inicio = null;
    }
    agregarProceso(proceso){
        if (this.inicio == null){
            this.inicio = proceso;
        }
        else{
            aux = this.inicio;
            while (aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            aux.siguiente = proceso;
            proceso.siguiente = this.inicio;
        }
    }
    eliminarProceso(){
        temp = this.inicio;
            aux = this.inicio;
            while (aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
        aux.siguiente = this.inicio.siguiente;
        this.inicio = this.inicio.siguiente;
        temp.siguiente = null;
    }
    Procesar(){
        
    }
}