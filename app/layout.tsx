import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/NewsLetter/newsForm";
import Footer from "@/components/Footer/footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Gleeworld Pharmacy – Telepharmacy and Medication Delivery | Your Dose of Happiness",
  description: "Gleeworld Pharmacy offers telepharmacy and medication delivery across Nigeria. Use our Medfinder app to find nearby pharmacies and get affordable health support.",
  icons: {
    icon: "/gleeworld-favicon.ico", // Use the renamed favicon here
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
        <link rel="icon" href="/gleeworld-favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Gleeworld Pharmacy offers telepharmacy and medication delivery across Nigeria. Use our Medfinder app to find nearby pharmacies and get affordable health support." />
        <meta name="keywords" content="Gleeworld Pharmacy, Medfinder, Nigeria pharmacy, telepharmacy, medication delivery, Aceclofenac, Paracetamol, pain relief, find medicine" />
        <meta name="author" content="Gleeworld Pharmacy" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
