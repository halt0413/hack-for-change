import { pgTable, varchar, integer, uuid, timestamp } from "drizzle-orm/pg-core"

export const charity = pgTable("charity", {
    id: uuid("id").defaultRandom().primaryKey(),
    donor_name: varchar("donor_name").notNull(),
    price: integer("price").notNull(),
    create_at: timestamp("create_at").defaultNow().notNull(),
})
