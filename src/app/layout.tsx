import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "../provider/SmoothScrollProvider";
import Footer from "@/components/Footer";
import { didot } from "./fonts";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Portfolio",
    template: "%s | Frontend Portfolio",
  },
  description:
    "Personal portfolio of a frontend developer with projects and contact info.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${didot.variable} ${geistMono.variable} antialiased `}>
        <SmoothScrollProvider>
           <div className="pt-14">

          {" "}
          {/* ارتفاع Navbar = حدود 56px → pt-14 مناسب */}
          {children}
        </div>
          </SmoothScrollProvider>
        {/* <Navbar /> */}
       
        <Footer />
      </body>
    </html>
  );
}
