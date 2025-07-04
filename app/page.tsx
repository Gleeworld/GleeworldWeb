import FlowHero from "@/components/Hero/hero-section";
import Services from "@/components/Services/services";
import Stats from "@/components/Stats/stats";
import NewsSection from "@/components/News/NewsSection";
import MedfinderPromo from "@/components/Medfinder/MedfinderPromo";
import ContactForm from "@/components/Contact/ContactForm";
import Newsletter from "@/components/NewsLetter/newsForm";
import Picture from "@/components/Picture/picture";

export default function Page() {
  return (
    <main>
      <FlowHero />
      <Picture  />
      <Services />
      <Stats />
      <NewsSection title="Title" subheading="header" />
      <MedfinderPromo />
      <ContactForm title="year" topText="job" subHeading="love life" details="live in the moment"  />
      
    </main>
  );
}
