import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { validateRequest } from "@/lib/lucia/auth";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "GeoTrack",
	description: "geo-attendance",
};

export default async function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user } = await validateRequest();

	if (!user) {
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
