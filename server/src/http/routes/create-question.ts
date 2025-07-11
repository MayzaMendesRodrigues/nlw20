import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { schema } from "../../db/schema/index.ts";
import { db } from "../../db/connection.ts";


export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/room/:roomId/questions",
    {

      schema: {
        params: z.object({
          roomId: z.string(),
        }),

        body: z.object({
          question: z.string().min(1),}),
      },
    },
    async (request, reply) => {
    const { roomId } = request.params;
    const { question } = request.body;

      const results = await db
        .insert(schema.questions)
        .values({
            question,
            roomId,
        })
        .returning();
        
      const insertedQuestion = results[0];

      if (!insertedQuestion) {
        throw new Error("Error creating room");
      }

      return reply.status(201).send({
        roomId: insertedQuestion.id,
      });
    }
  );
};
