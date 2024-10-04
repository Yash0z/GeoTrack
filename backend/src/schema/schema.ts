import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";


export const userRoles = pgEnum('role', ['User', 'Admin']);


export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
   username:text("username").notNull().unique(),
   email:text("email").notNull().unique(),
   hashedPassword: text("hashed_password"),
   role:userRoles('role').notNull()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});


