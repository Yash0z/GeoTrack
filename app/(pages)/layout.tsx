import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "GeoTrack",
	description: "geo-attendance",
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>{children}</main>
			<Toaster />
		</div>
	);
}
