import { Hono } from "hono";
import { ClassesTable } from "../models/schema";
import db from "../db";

const app = new Hono().post("/", async (c) => {
	try {
		const { AuthorID, classname, description } = await c.req.json();

		// Insert the class into the database
		await db.insert(ClassesTable).values({
			AuthorID,
			classname,
			description,
		});

		return c.json({ message: "Class created successfully" });
	} catch (error) {
		console.error("Error creating class:", error);
		return c.json(
			{ message: "Error creating class", error: String(error) },
			500
		);
	}
});
export default app;
