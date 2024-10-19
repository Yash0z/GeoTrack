import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	hashedPassword: text("hashed_password"),
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),
});

// export const ClassesTable = pgTable("classes", {
// 	id: text("id").primaryKey(), // UUID auto-generation
// 	AuthorID: text("user_id")
// 		.notNull()
// 		.references(() => userTable.id),
// 	classname: text("classname").notNull(),
// 	description: text("description"),
// });
