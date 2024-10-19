import { Context } from "@/backend/utils/context";
import { lucia } from "@/backend/utils/lucia";
import { Hono } from "hono";

const app = new Hono<Context>().post("/", async (c) => {
	const session = c.get("session");
	if (!session) {
		return c.json({ error: "unauthorized" }, 401);
	}
	await lucia.invalidateSession(session.id);
	c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize());
	return c.json({ message: "success" }, 200);
});
export default app;
