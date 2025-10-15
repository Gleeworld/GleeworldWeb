import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/NewsLetter/newsForm";
import Footer from "@/components/Footer/footer";

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
      <body className={`antialiased bg-silver`}> {/* ✅ ADDED bg-silver HERE */}
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
