import HeroSlider from "@/components/Hero/HeroSlider";
import Services from '../components/Services/services';
import Stats from '../components/Stats/stats';
import NewsSection from '@/components/News/NewsSection';
import ContactForm from '@/components/Contact/ContactForm';
import MedfinderPromo from '@/components/Medfinder/MedfinderPromo';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Services />
      <Stats />
      <NewsSection subheading={"latest Developments"} title={"News"} />
      <MedfinderPromo />
      <ContactForm
        title='Contact Us'
        topText='Get in Touch'
        subHeading="Ready to Elevate your Pharmacy's Operation"
        details='Contact us today to explore our diverse range of products and discover how our innovative solutions can meet your specific needs'
      />
    </main>
  );
}
