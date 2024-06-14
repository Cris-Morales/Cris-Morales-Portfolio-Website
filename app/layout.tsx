import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts";
import Navbar from "./ui/Navbar";
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
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {/* {children} */}

        <div>
          <Header />
          <div>
            <Navbar />
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
