import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import MainNav from "./components/main-nav/main-nav";
import MainFooter from "./components/footer/footer";

export const metadata: Metadata = {
  title: "OTD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <main>
          <MainNav></MainNav>
            {children}
          <MainFooter></MainFooter>
        </main>
      </body>
    </html>
  );
}
