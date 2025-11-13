import type { Metadata } from "next";
import {  Montserrat  } from "next/font/google";
import "./globals.css";

    const montserrat = Montserrat({
      subsets: ['latin'],
      weight: ['400', '700'], // Specify the weights you need
      variable: '--font-montserrat', // Optional: for use with CSS variables
      display: 'swap', // Recommended for better performance
    });

export const metadata: Metadata = {
  title: "Laal Kaptan",
  description: "Premium Quality wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.variable}
      >
        {children}
      </body>
    </html>
  );
}
