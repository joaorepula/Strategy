import knex from 'knex'
export default class PostegreStategy {

    #instance
    constructor(connectionString){
        this.connectionString = connectionString;
        this.table = "warrior"
    }

    async connect(){
        this.#instance = knex({
            client: "pg",
            connection: this.connectionString
        })
        return this.#instance.raw('SELECT 1 + 1 AS result')
    }

    async create(item){
        return this.#instance.insert(item).into(this.table)
    }

    async read(item){
        return this.#instance.select().from(this.table)
    }


}