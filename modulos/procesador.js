const Proceso = new require ("./proceso.js");
let aux = null;
module.exports = class Procesador{
    constructor(){
        this.inicio = null;
    }
    agregarProceso(proceso){
        if (this.inicio == null){
            this.inicio = proceso;
            proceso.siguiente = this.inicio;
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
    eliminarProceso(proceso){
        if (this.inicio == null){
            return false;
        }
        else if(proceso.id == this.inicio.id){
            let temp = this.inicio;
            aux = this.inicio;
            while (aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            aux.siguiente = this.inicio.siguiente;
            this.inicio = this.inicio.siguiente;
            temp.siguiente = null;
        }
        else{
            aux = this.inicio;
            while (aux.siguiente.id != proceso.id && aux.siguiente.id != this.inicio.id){
                aux = aux.siguiente;
            }
            let temp = aux.siguiente;
            aux.siguiente = temp.siguiente;
            temp.siguiente = null;
        } 
    }
    procesar(){
        let cond = 0;
        let tiempoSinProceso = 0;
        let procesoId = 1;
        for (let i = 0;i<300;i++){
            let probabilidad = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
            if (probabilidad <= 39){
                let nuevoProceso = new Proceso(procesoId);
                this.agregarProceso(nuevoProceso);
                procesoId++;
            }
            if (this.inicio == null){
                tiempoSinProceso++
            }
            else{
                if (cond == 0){
                    aux = this.inicio;
                    cond = 1;
                }
                if (aux.ciclosNecesarios > 0){
                    aux.ciclosNecesarios--;

                }
                else{
                    this.eliminarProceso(aux);
                }
                aux = aux.siguiente;
            }
        }
        let i = 0;
        let cont = 0;
        aux = this.inicio;
        if (aux == null){
            return `El procesador estuvo ${tiempoSinProceso} ciclos sin procesos, y no quedaron procesos`;
        }
        else{
            while(aux.siguiente != this.inicio){
                aux = aux.siguiente;
                cont+= aux.ciclosNecesarios;
                i++;
            }
            return `El procesador estuvo ${tiempoSinProceso} ciclos sin procesos,
quedaron ${i} procesos y sus ciclos sumaban ${cont}`;
        }
    }
}