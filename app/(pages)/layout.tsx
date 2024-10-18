import Navbar from "@/components/Navbar";
import { Metadata } from "next";

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
