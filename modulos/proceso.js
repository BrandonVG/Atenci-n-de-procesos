module.exports = class Proceso{
    constructor(){
        this.ciclosNecesario = Math.floor((Math.random() * (14 - 4 + 1)) + 4);
        this.siguiente = null;
    }
}