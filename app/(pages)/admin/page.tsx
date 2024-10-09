import { redirect } from "next/navigation";
import Dashboard from "@/components/DashBoard";
import getUser from "@/hooks/getUser";

export default async function AdminPage() {
	const { id } = await getUser();

	if (!id) {
		return "Please Sign in To Continue";
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<Dashboard />
		</div>
	);
}
