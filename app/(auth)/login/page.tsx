import { getUser } from "@/backend/utils/validateRequest";
import LoginForm from "@/components/forms/LoginForm";
import { redirect } from "next/navigation";

export default async function login() {
	const { user, session } = await getUser();
	if (user || session) redirect("/dashboard");
	return (
		<>
			<LoginForm />
		</>
	);
}
