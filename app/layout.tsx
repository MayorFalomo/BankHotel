import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { localFont } from "@next/font/local";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// const miracle = localFont({
//   src: [
//     {
//       path: "./Miracle400.otf",
//       weight: "400",
//       style: "normal",
//       display: "swap",
//     },
//   ],
//   variable: "--font-miracle",
// });
export const metadata: Metadata = {
  title: "BankHotel",
  description: "Developed by Web Wizard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
