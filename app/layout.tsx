import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts";
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Cristian Morales",
  description: "Cristian Morales: Engineer and Web Developer.",
  keywords: ['Cristian', 'Morales', 'Software Engineer', 'Engineer', 'Mechanical Engineer'],
  authors: [{ name: 'Cristian' }],
  creator: 'Cristian Morales',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.className} antialiased scroll-smooth`}>
      <body className={`${nunito.className} antialiased`}>
        <div className="flex flex-col bg-background text-light-text" id='home'>
          <Header />
          {children}
        </div>
        <div className="z-10 fixed bottom-0 w-screen h-screen xl:bg-background-glow " />
      </body>
    </html>
  );
}
