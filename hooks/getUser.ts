import db from "@/backend/src/db";
import { userTable } from "@/backend/src/models/schema";
import { validateRequest } from "../lib/lucia/validateSession";
import { eq } from "drizzle-orm";
import { Session, User } from "lucia";

type UserDetails = {
	id: string | undefined;
	username: string | undefined;
	email: string | undefined;
	role: string | undefined;
};

const getUser = async (): Promise<UserDetails> => {
	try {
		const { user, session } = (await validateRequest()) as {
			user: User;
			session: Session;
		};

		if (!user || !session) {
			console.log("No user or session found");
			return {
				id: undefined,
				username: undefined,
				email: undefined,
				role: undefined,
			};
		}

		if (typeof user.id !== "string") {
			throw new Error("User ID is not valid");
		}

		const userResult = await db
			.select({
				id: userTable.id,
				username: userTable.username,
				email: userTable.email,
				role: userTable.role,
			})
			.from(userTable)
			.where(eq(userTable.id, user.id))
			.limit(1);

		if (userResult.length > 0) {
			const { id, username, email, role } = userResult[0];
			return { id, username, email, role };
		}

		console.log("User not found");
		return {
			id: undefined,
			username: undefined,
			email: undefined,
			role: undefined,
		};
	} catch (error) {
		console.error("Error fetching user data:", error);
		return {
			id: undefined,
			username: undefined,
			email: undefined,
			role: undefined,
		};
	}
};

export default getUser;
