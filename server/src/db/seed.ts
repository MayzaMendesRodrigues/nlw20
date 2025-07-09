import {reset, seed} from 'drizzle-seed'
import {db, sql} from './connection.ts'
import { schema } from './schema/index.ts'


await reset(db, schema)
await seed(db, schema).refine(f => {
    return{
        rooms: {
            count:20, //20salas
            columns:{
                name: f.companyName(), // nome de empresa aleatoria
                description: f.loremIpsum()// crie descricao aleatoria 
            }
        }
    }
})
await sql.end()