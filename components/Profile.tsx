import getUser from "@/hooks/getUser";


export default async function UserProfile() {
	const { username, email ,id} = await getUser();

	return (
		<div className='flex flex-col space-y-2'>
			{/* Display user's name */}
			<p className='text-lg font-medium leading-none'>
				{username || "Anonmous"}
			</p>
         <p className='text-lg font-medium leading-none'>
				{id || "Anonmous"}
			</p>

			{/* Display user's email */}
			<p className='text-sm leading-none text-muted-foreground'>
				{email || "No email available"}
			</p>
		</div>
	);
}
