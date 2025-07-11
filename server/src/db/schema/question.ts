import {pgTable, uuid, text, timestamp} from 'drizzle-orm/pg-core'
import { rooms } from './rooms.ts'

export const questions = pgTable('questions', {
    id: uuid().primaryKey().defaultRandom(),
    roomsId: uuid().references (() => rooms.id).notNull(),
    question: text().notNull(),
    answer: text(),
    createdAt: timestamp().defaultNow().notNull()
})