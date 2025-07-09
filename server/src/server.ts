import {fastify} from 'fastify'
import {
    serializerCompiler, 
    validatorCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'
import {fastifyCors} from '@fastify/cors'
import { env } from './env.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
}) // a url que o Frontend tera acesso 



app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomsRoute)
app.listen({port: env.PORT }).then(() => {//isso e uma variavel de ambiente sempre 
    console.log(`Port: ${process.env.PORT}`)
    console.log('HTTP server running!')
}) //a porta que a nossa app vai rodar 