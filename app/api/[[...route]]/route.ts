import { Hono } from "hono";
import { handle } from "hono/vercel";
import { csrf } from "hono/csrf";
import { getCookie } from "hono/cookie";
import { lucia } from "@/backend/utils/lucia";
import { User, Session, verifyRequestOrigin } from "lucia";
import { cors } from "hono/cors";
import { Context } from "@/backend/utils/context";

// export const runtime = "edge";

const app = new Hono<Context>().basePath("/api");
app.use("/api/*", cors());

// middleware for validation
// app.use("*", async (c, next) => {
// 	if (c.req.method === "GET") {
// 		return next();
// 	}
// 	const originHeader = c.req.header("Origin") ?? null;
// 	const hostHeader = c.req.header("Host") ?? null;
// 	if (
// 		!originHeader ||
// 		!hostHeader ||
// 		!verifyRequestOrigin(originHeader, [hostHeader])
// 	) {
// 		return c.body(null, 403);
// 	}
// 	return next();
// });
app.use("*", async (c, next) => {
	const sessionId = getCookie(c, lucia.sessionCookieName) ?? null;
	if (!sessionId) {
		c.set("user", null);
		c.set("session", null);
		return next();
	}
	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		// use `header()` instead of `setCookie()` to avoid TS errors
		c.header(
			"Set-Cookie",
			lucia.createSessionCookie(session.id).serialize(),
			{
				append: true,
			}
		);
	}
	if (!session) {
		c.header("Set-Cookie", lucia.createBlankSessionCookie().serialize(), {
			append: true,
		});
	}
	c.set("user", user);
	c.set("session", session);
	return next();
});
//

// rotues
import RegisterRouter from "./register";
import loginRouter from "./login";
import logoutRouter from "./logout";
import userRouter from "./getUser";
const route = app
	.route("/login", loginRouter)
	.route("/register", RegisterRouter)
	.route("/logout", logoutRouter)
	.route("/user", userRouter);

export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof route;
