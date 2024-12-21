import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "sonner";

import W3Provider from "../components/w3provider";
import { SkeletonTheme } from "react-loading-skeleton";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const inter = localFont({
	src: "./fonts/Inter.ttf",
	variable: "--font-inter",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Lyra | The Cosmic Guardian",
	description:
		"Lyra is the cosmic guardian, overseeing a growing prize pool and testing the ingenuity and wits of humanity.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased bg-lyra-sm lg:bg-lyra-lg bg-fixed bg-center bg-cover oveflow-hidden`}
			>
				<W3Provider>
					<SkeletonTheme baseColor="#1c1c1f" highlightColor="#2f2f33" duration={1}>
						{children}
						<Toaster
							toastOptions={{
								className: "toast-custom",
							}}
						/>
					</SkeletonTheme>
				</W3Provider>
			</body>
		</html>
	);
}
