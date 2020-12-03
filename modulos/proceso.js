module.exports = class Proceso{
    constructor(id){
        this.id = id;
        this.ciclosNecesarios = Math.floor((Math.random() * (14 - 4 + 1)) + 4);
        this.siguiente = null;
    }
}