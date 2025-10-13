import FlowHero from "@/components/Hero/hero-section";
import Services from "@/components/Services/services";
import Stats from "@/components/Stats/stats";
import NewsSection from "@/components/News/NewsSection";
import MedfinderPromo from "@/components/Medfinder/MedfinderPromo";
import ContactForm from "@/components/Contact/ContactForm";

export default function Page() {
  return (
    <main className="bg-silver">
      <FlowHero />
      <Services />
      <Stats />
      <MedfinderPromo />
      <NewsSection title="Healthcare News" subheading="Stay Informed" />
      <ContactForm 
        title="Contact Us" 
        topText="Get in Touch" 
        subHeading="We're Here to Help" 
        details="Reach out for any questions about our pharmacy services"  
      />
    </main>
  );
}
