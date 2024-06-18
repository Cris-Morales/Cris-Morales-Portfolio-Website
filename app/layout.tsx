import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts";
import Header from "./ui/Header";

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
        <div className="flex h-screen flex-col" id='home'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
