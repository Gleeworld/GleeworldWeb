import FlowHero from "@/components/Hero/hero-section";
import Services from "@/components/Services/services";
import Stats from "@/components/Stats/stats";
import MedfinderPromo from "@/components/Medfinder/MedfinderPromo"; // Simple promo
import NewsSection from "@/components/News/NewsSection";
import ContactForm from "@/components/Contact/ContactForm";

export default function Page() {
  return (
    <main className="bg-silver">
      <FlowHero />
      <Services />
      <Stats />
      <MedfinderPromo /> {/* Simple link to medfinder.com.ng */}
      <NewsSection title="Healthcare News" subheading="Stay Informed" />
      <ContactForm />
    </main>
  );
}
