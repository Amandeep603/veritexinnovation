import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/main/StarBackground";
import "@/components/main/TeamMember.module.css"
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import styles from "@/components/main/Navbar.module.css";

const inter = Poppins({ subsets: ["latin"], weight : ["400" , "500" , "600", "700"] });

export const metadata: Metadata = {
  title: "Veritex Innovation",
  description: "Transforming industries with cutting-edge technology and visionary solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
