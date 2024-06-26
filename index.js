import ContextStrategy from "./src/base/contextStategy.js"
import MongoDBStrategy from "./src/stategies/mongoDBStrategy.js"
import PostegreStategy from "./src/stategies/postegresStrategy.js"

const postgresConnectionString = "postgres://joao:123@localhost:5432/heroes"
const postgresContext = new ContextStrategy(new PostegreStategy(postgresConnectionString))
await postgresContext.connect();

const mongoDbConnectionString = "mongodb://JOAO:senhaadmin@localhost:27017/heroes"
const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongoDbConnectionString))
await mongoDBContext.connect()

const data = 
[
    {
        name: 'repula',
        type:"transaction"
    },
    {
        name: 'repula',
        type:"activityLog"
    }
]

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext
}

for (const { type, name } of data) {
    const context = contextTypes[type]
    await context.create({name: name + Date.now()})
    console.log(await context.read())
}