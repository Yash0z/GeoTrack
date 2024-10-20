import { Hono } from "hono";
import { generateId } from "lucia";
import { zValidator } from "@hono/zod-validator";
import db from "@/backend/db";
import { ClassesTable } from "@/backend/model/schema";
import { ClassSchema } from "@/types";
import { Context } from "@/backend/utils/context";

const app = new Hono<Context>().post(
	"/",
	zValidator("json", ClassSchema),
	async (c) => {
		const session = c.get("session");
		const user = c.get("user");
		console.log(session);
		console.log(user);
		if (!session || !user) {
			return c.json({ error: "no user or session" }, 400);
		}
		const values = c.req.valid("json");
		const userId = generateId(10);
		const classcode = generateId(5);
		// console.log(values.coordinates);
		const [data] = await db
			.insert(ClassesTable)
			.values({
				id: userId,
				AuthorID: user.id,
				classname: values.classname,
				description: values.description,
				code: classcode,
				coordinates: values.coordinates,
			})
			.returning({
				id: ClassesTable.id,
				AuthorId: ClassesTable.AuthorID,
				username: ClassesTable.classname,
			});

		return c.json({ data });
	}
);
export default app;
