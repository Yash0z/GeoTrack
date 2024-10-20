import { Hono } from "hono";
import { generateId } from "lucia";
import { zValidator } from "@hono/zod-validator";
import db from "@/backend/db";
import { ClassesTable, ClassMembers } from "@/backend/model/schema";
import { ClassMemberSchema, ClassSchema } from "@/types";
import { Context } from "@/backend/utils/context";
import { eq } from "drizzle-orm";

const app = new Hono<Context>()
	.get("/", async (c) => {
		const session = c.get("session");
		const user = c.get("user");
		if (!session || !user) {
			return c.json({ error: "no user or session" }, 400);
		}
		const currentUserClasses = await db.query.ClassesTable.findMany({
			where: (table) => eq(table.AuthorID, user.id),
			columns: {
				classname: true,
				description: true,
				code: true,
			},
		});
		if (!currentUserClasses) {
			return c.json({ error: "no Classes" }, 400);
		}

		if (
			!Array.isArray(currentUserClasses) ||
			currentUserClasses.length === 0
		) {
			return c.json([], 200);
		}

		return c.json(currentUserClasses, 200);
	})
	.post("/", zValidator("json", ClassSchema), async (c) => {
		const session = c.get("session");
		const user = c.get("user");
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
	})
	.post("/join", zValidator("json", ClassMemberSchema), async (c) => {
		const session = c.get("session");
		const user = c.get("user");
		if (!session || !user) {
			return c.json({ error: "no user or session" }, 400);
		}
		const values = c.req.valid("json");
		// Check if the user is the creator of the class
		const classDetails = await db.query.ClassesTable.findFirst({
			where: (table) =>
				eq(table.id, values.classId) && eq(table.AuthorID, user.id),
		});

		if (classDetails) {
			return c.json(
				{
					message: "Class creators are already members of their own class",
				},
				400
			); // 400 Bad Request
		}

		// Check if the user is already a member of the class
		const existingMembership = await db.query.ClassMembers.findFirst({
			where: (table) =>
				eq(table.userId, user.id) && eq(table.classId, values.classId),
		});
		if (existingMembership) {
			return c.json(
				{ message: "User is already a member of this class" },
				409
			); // 409 Conflict
		}

		const id = generateId(10);
		const [data] = await db
			.insert(ClassMembers)
			.values({
				id: id,
				userId: user.id,
				classId: values.classId,
				joinedAt: new Date(),
			})
			.returning({
				userId: ClassMembers.userId,
			});

		if (!data) {
			return c.json({ message: "something went wrong" }, 400);
		}
		return c.json({ data }, 200);
	});
export default app;
