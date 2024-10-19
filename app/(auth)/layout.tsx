import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Auth",
		default: "Auth",
	},
};

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative text-2xl text-text h-screen w-full overflow-y-hidden font-ClashGrotex  lg:p-28 '>
			<div className='scrollbar h-full flex items-center  justify-center lg:justify-start overflow-y-auto p-5'>
				{children}
			</div>
		</div>
	);
}
