import React from "react";
import Section from "@/components/sectionHeader/section";
import NewsSection from "@/components/News/NewsSection";
import ContactForm from "@/components/Contact/ContactForm";

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section (matches homepage gradient and font style) */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Top Stories</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Stay informed with trending news, innovations, and healthcare
            insights from Gleeworld Pharmacy and beyond.
          </p>
        </div>
      </section>

      {/* Trending Section */}
      <div className="text-center py-16 px-4">
        <p className="text-orange-500 text-lg font-medium mb-2">Trending</p>
        <h2 className="text-4xl font-bold text-dark-gray mb-8">
          Top Stories & Updates
        </h2>

        <NewsSection subheading="Trending" title="Top Stories" />
      </div>

      {/* Optional Additional News Section */}
      <div className="py-8">
        <NewsSection subheading="" title="" />
      </div>

      {/* Contact Form Section — Frosted Glass over Orange Background */}
      <section
        className="relative py-20"
        style={{
          background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <ContactForm
            title="Share with us"
            details="Do you have credible health news? Please provide as many details as possible to help us understand and verify the information. Our editorial team will review your submission and get back to you promptly."
          />
        </div>
      </section>
    </div>
  );
}
