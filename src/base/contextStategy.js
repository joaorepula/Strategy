export default class ContextStrategy {

    constructor(dbStategy){
        this.dbStategy = dbStategy
    }

    async connect(){
        return this.dbStategy.connect()
    }

    async create(item){
        return this.dbStategy.create(item)
    }

    async read(item){
        return this.dbStategy.read(item)
    }
}