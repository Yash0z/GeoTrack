import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getUser from "@/hooks/getUser";

export const metadata: Metadata = {
	title: "GeoTrack",
	description: "geo-attendance",
};

export default async function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { id } = await getUser();
	if (!id) {
		return "Please Sign in To Continue";
	}
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>{children}</main>
			<Toaster />
			<Footer />
		</div>
	);
}
