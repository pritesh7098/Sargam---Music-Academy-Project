import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDemo from "./../components/NavbarDemo";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./../components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <NavbarDemo />{" "}
        </div>
        {children}
      </body>
    </html>
  );
}
