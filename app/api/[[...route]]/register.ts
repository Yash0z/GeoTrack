import { Hono } from "hono";
import { User, Session, generateId } from "lucia";
import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import db from "@/backend/db";
import { userTable } from "@/backend/model/schema";
import { RegisterSchema } from "@/types";
import { lucia } from "@/backend/utils/lucia";
import { Context } from "@/backend/utils/context";
const app = new Hono<Context>()
	.get("/", async (c) => {
		const session = c.get("session");
		if (session) {
			return c.redirect("/dashboard");
		}
	})
	.post("/", zValidator("json", RegisterSchema), async (c) => {
		const values = c.req.valid("json");
		if (!values) {
			return c.json({ error: "return valid values" }, 500);
		}
		const saltRounds = 10;
		const hashed_Password = await bcrypt.hash(values.password, saltRounds);
		const userId = generateId(15);

		const [data] = await db
			.insert(userTable)
			.values({
				id: userId,
				username: values.username,
				hashedPassword: hashed_Password,
				email: values.email,
			})
			.returning({
				id: userTable.id,
				username: userTable.username,
				email: userTable.email,
			});

		if (!data) {
			return c.json({ error: "error creating account" }, 400);
		}

		// setting cookies
		const session = await lucia.createSession(userId, {});
		c.header(
			"Set-Cookie",
			lucia.createSessionCookie(session.id).serialize(),
			{ append: true }
		);
		if (!session) {
			return c.json({ error: "error creating session" }, 400);
		}
		return c.json({ data }, 200);
	});
   
export default app;
