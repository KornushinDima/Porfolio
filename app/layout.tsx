import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
    title: "Dmytro Korniushyn - Product Designer",
    description: "Portfolio of Dmytro Korniushyn, a Senior Product Designer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={dmSans.variable}>
            <body>{children}</body>
        </html>
    );
}
