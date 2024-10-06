import type { Metadata } from "next";
import "./globals.css";

// LOCAL FONTS
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
const ClashGrotesk = localFont({
	src: "../public/fonts/ClashGrotesk-Regular.woff2",
	variable: "--font-ClashGrotesk",
	weight: "100 900",
});
const EuclidRegular = localFont({
	src: "../public/fonts/EuclidRegular.woff2",
	variable: "--font-EuclidRegular",
	weight: "100 900",
});
const Satoshi = localFont({
	src: "../public/fonts/Satoshi-Regular.woff2",
	variable: "--font-Satoshi",
	weight: "100 900",
});
const Satoshi_B = localFont({
	src: "../public/fonts/Satoshi-Black.woff2",
	variable: "--font-Satoshi_B",
	weight: "100 900",
});

//////////////////////////

export const metadata: Metadata = {
	title: "GeoTrack",
	description: "geo-attendance",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${ClashGrotesk.variable} ${EuclidRegular.variable} ${Satoshi.variable} ${Satoshi_B.variable} antialiased`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
