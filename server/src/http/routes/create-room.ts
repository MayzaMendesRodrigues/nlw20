import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import {z} from "zod/v4";
import { schema } from "../../db/schema/index.ts";
import { db } from "../../db/connection.ts";
export const createRoomsRoute : FastifyPluginCallbackZod =  (app) => {
    app.post('/rooms',{
        schema: {
            body: z.object({
                name: z.string().min(1),
                description: z.string().optional(),
            }),
    },
},
     async (request, reply) => {
        const {name, description} = request.body
        const results = await db.insert(schema.rooms)
        .values({
       name,
       description,
        }).returning()
        const insertedRoom = results[0];

        if (!insertedRoom) {
            throw new Error('Error creating room')
        }


        return reply.status(201).send({
            roomsId: insertedRoom.id,
           
        });
      

}
    )}