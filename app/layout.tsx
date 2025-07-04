import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/NewsLetter/newsForm";
import Footer from "@/components/Footer/footer";

// // Fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Metadata
export const metadata: Metadata = {
  title: "Gleeworld Pharmacy – Telepharmacy and Medication Delivery | Your Dose of Happiness",
  description: "Gleeworld Pharmacy offers telepharmacy and medication delivery across Nigeria. Use Medfinder to discover nearby pharmacies and get your preferred medicines. Save time with easy pickup or delivery across Nigeria. Experience automated reminders, refills, follow-up care messages, and AI-enabled pharmacist consultations — all in one app. Affordable, fast, and hassle-free access to medicines and primary care.",
  icons: {
    icon: "/gleeworld-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gleeworld-favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
