import Hero from '../components/Hero/hero';
import Services from '../components/Services/services';
import Stats from '../components/Stats/stats';
import NewsSection from '@/components/News/NewsSection';
import ContactForm from '@/components/Contact/ContactForm';
//import NewsLetter from '@/components/NewsLetter/newsForm';
//import Footer from '@/components/Footer/footer';
import MedfinderPromo from '@/components/Medfinder/MedfinderPromo';


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <NewsSection subheading={"latest Developments"} title={"News"} />
      <MedfinderPromo />
      <ContactForm title='Contact Us' topText='Get in Touch' subHeading='Ready to Elevate your Pharmacy&apos;s Operation' details='Contact us today to explore our diverse range of products and discover how our innovative solutions can meet your specific needs' />
      
    </main>
  );
}