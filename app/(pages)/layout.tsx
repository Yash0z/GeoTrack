import { validateSession } from "@/backend/utils/validateRequest";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: {
		template: "%s | GeoTrack",
		default: "GeoTrack",
	},
};

export default async function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, session } = await validateSession();
	if (!user || !session || user.id !== session.userId) redirect("/login");

	return (
		<div className='relative text-xl text-text h-screen w-full overflow-y-hidden font-ClashGrotex   '>
			<div className='w-full z-10'>
				<Navbar />
			</div>
			<div className='scrollbar h-full flex-1 overflow-y-auto p-3.5'>
				{children}
			</div>
		</div>
	);
}
