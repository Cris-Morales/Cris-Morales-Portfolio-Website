import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts";
import Header from "./ui/Header";
import Image from "next/image";

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
        <div className="flex flex-col bg-background" id='home'>
          <Header />
          {children}
        </div>
        <div className=" fixed bottom-0 w-screen h-screen bg-background-glow z-10" />

        {/* <Image
          src="/ellipse.svg"
          alt="cool looking bg"
          width={1920}
          height={1080}
          className="fixed bottom-0 right-0"
        /> */}
      </body>
    </html>
  );
}
