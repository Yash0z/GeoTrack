import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/lucia/auth";
import Dashboard from "@/components/DashBoard";

export default async function AdminPage() {
	const { user } = await validateRequest();

	if (!user) {
		return "Please Sign in To Continue";
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<Dashboard />
		</div>
	);
}
