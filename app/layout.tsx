import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/NewsLetter/newsForm";
import Footer from "@/components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gleeworld Pharmacy – Affordable Pharmacy in Nigeria | Your Dose of Happiness",
  description:
    "Gleeworld Pharmacy offers affordable medicines, pain relief, and health support across Nigeria. Use our Medfinder app to find a nearby pharmacy today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gleeworld Pharmacy – Affordable Pharmacy in Nigeria | Your Dose of Happiness</title>
        <meta
          name="description"
          content="Gleeworld Pharmacy offers affordable medicines, pain relief, and health support across Nigeria. Use our Medfinder app to find a nearby pharmacy today."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>Welcome to Gleeworld Pharmacy – Your Trusted Pharmacy in Nigeria</h1>
        <h2>Find Nearby Pharmacies in Lagos, Lekki & Beyond</h2>
        <h3>Affordable Painkillers – Aceclofenac & Paracetamol Tablets</h3>
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}

      </body>
    </html>
  );
}
