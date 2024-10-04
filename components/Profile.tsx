import db from "@/backend/src/db";
import { userTable } from "@/backend/src/schema/schema";
import getUser from "@/lib/getUser";
import { validateRequest } from "@/lib/lucia/auth";
import { eq } from "drizzle-orm";

export default async function UserProfile() {
	// Call validateRequest to get user and session
	const currentUser = await getUser();

	return (
		<div className='flex flex-col space-y-2'>
			{/* Display user's name */}
			<p className='text-lg font-medium leading-none'>
				{currentUser.username || "Anonmous"}
			</p>

			{/* Display user's email */}
			<p className='text-sm leading-none text-muted-foreground'>
				{currentUser.email || "No email available"}
			</p>
		</div>
	);
}
