import { LoginSchema } from "@/types";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import db from "@/backend/db";
import { eq } from "drizzle-orm";
import { lucia } from "@/backend/utils/lucia";
import { Context } from "@/backend/utils/context";

const app = new Hono<Context>()
	.get("/", async (c) => {
		const session = c.get("session");
		if (session) {
			return c.redirect("/dashboard");
		}
	})
	.post("/", zValidator("json", LoginSchema), async (c) => {
		const values = c.req.valid("json");
		if (!values) {
			return c.json({ error: "return valid values" }, 500);
		}
		const existingUser = await db.query.userTable.findFirst({
			where: (table) => eq(table.username, values.username),
		});

		if (!existingUser) {
			return c.json({ error: "Invalid credentials" }, 401);
		}

		if (!existingUser.hashedPassword) {
			return c.json({ error: "something went wrong" }, 500);
		}

		const isValidPassword = await bcrypt.compare(
			values.password,
			existingUser.hashedPassword
		);

		if (!isValidPassword) {
			return c.json({ error: "Invalid credentials" }, 401);
		}
       // setting cookies
		const session = await lucia.createSession(existingUser.id, {});
		c.header(
			"Set-Cookie",
			lucia.createSessionCookie(session.id).serialize(),
			{ append: true }
		);
		if (!session) {
			return c.json({ error: "error creating session" }, 400);
		}
		const data = {
			username: existingUser.username,
			email: existingUser.email,
		};
		if (!data) {
			return c.json({ error: "error loggin In" }, 400);
		}
		return c.json({ data });
	});

export default app;
