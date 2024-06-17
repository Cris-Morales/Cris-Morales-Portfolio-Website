import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts";
import Navbar from "./ui/navbar/Navbar";
import Header from "./ui/Header";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Cristian Morales",
  description: "Cristian Morales, Engineer, Web Developer."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${nunito.className} antialiased`}>
        <div className="flex h-screen flex-col">
          <Header />
          <div className="flex p-content">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
