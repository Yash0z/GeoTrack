import db from "@/backend/src/db";
import { userTable } from "@/backend/src/schema/schema";
import { eq } from "drizzle-orm";
import { validateRequest } from "./lucia/auth";

const getUser = async () => {
  try {
    // Validate the request to get the user ID (as a string)
    const { user, session } = await validateRequest();

    // If no user or session, return early
    if (!user|| !session) {
      return { username: undefined, email: undefined };
    }

    // Fetch user data from the database using the userId
    const userResult = await db
      .select({
        username: userTable.username,
        email: userTable.email, // Select the username and email fields
      })
      .from(userTable)
      .where(eq(userTable.id, user.id)) // Find user by ID (userId is now a string)
      .limit(1); // Ensure we're only getting one result

    // If user is found, return their data
    if (userResult.length > 0) {
      const { username, email } = userResult[0];
      console.log(username); 
      console.log(email); 
      return { username, email };
    }

    // Return undefined if user is not found
    return { username: undefined, email: undefined };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { username: undefined, email: undefined };
  }
};

export default getUser;
