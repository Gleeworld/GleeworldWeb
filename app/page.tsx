import Hero1 from "@/components/Hero/Hero1";
import Services from "@/components/Services/services";
import Stats from "@/components/Stats/stats";
import NewsSection from "@/components/News/NewsSection";
import MedfinderPromo from "@/components/Medfinder/MedfinderPromo";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero1 />
      <Services />
      <Stats />
      <NewsSection subheading={"Latest Developments"} title={"News"} />
      <MedfinderPromo />
      <ContactForm
        title="Contact Us"
        topText="Get in Touch"
        subHeading="Ready to Elevate your Pharmacy's Operation"
        details="Contact us today to explore our diverse range of products and discover how our innovative solutions can meet your specific needs"
      />
    </main>
  );
}
