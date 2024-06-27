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
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} antialiased`}>
        <div className="flex flex-col bg-background" id='home'>
          <Header />
          {children}
        </div>
        <div className=" fixed bottom-0 w-screen h-screen bg-background-glow z-10" />
      </body>
    </html>
  );
}
