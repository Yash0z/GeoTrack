import db from "@/backend/db";
import { userTable } from "@/backend/model/schema";
import { Context } from "@/backend/utils/context";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono<Context>().get("/", async (c) => {
	const user = c.get("user");
	if (!user) {
		return c.json({ error: "unauth" }, 401);
	}
	const currentUser = await db.query.userTable.findFirst({
		where: (table) => eq(table.id, user.id),
		columns: {
			id: true,
			username: true,
			email: true,
		},
	});

	if (!currentUser) {
		return c.json({ error: "User not Found" }, 400);
	}

	return c.json(
		{
			currentUser,
		},
		200
	);
});
export default app;
