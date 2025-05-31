import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1650&q=80',
    title: 'Welcome to Gleeworld Pharmacy',
    subtitle: 'Your Dose of Happiness',
    pitch: 'Empowering 100+ pharmacies to deliver wellness daily.',
    buttons: [
      { text: 'Shop Now', link: '/shop' },
      { text: 'Learn More', link: '/about' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1588776814546-ec7d3c98c5d7?auto=format&fit=crop&w=1650&q=80',
    title: 'Trusted by 100+ Pharmacies',
    subtitle: 'Supporting communities across Nigeria',
    pitch: 'We’re building stronger healthcare one connection at a time.',
    buttons: [
      { text: 'Join Our Network', link: '/services' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1607083206967-cc746d0b1df0?auto=format&fit=crop&w=1650&q=80',
    title: 'Find Medicine Fast',
    subtitle: 'Introducing the Medfinder App',
    pitch: 'Connect instantly with nearby pharmacies.',
    buttons: [
      { text: 'Download App', link: '/medfinderapp' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600154450434-74e3d7c4d585?auto=format&fit=crop&w=1650&q=80',
    title: 'Access Credit, Grow Faster',
    subtitle: 'Pharmacy-focused financing',
    pitch: 'Flexible support for small business owners.',
    buttons: [
      { text: 'Get Started', link: '/services' },
    ],
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/70 via-[#FF9933]/60 to-silver/40"></div>
              <div className="relative z-10 text-center max-w-3xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-2 font-semibold">
                  {slide.subtitle}
                </h2>
                <p className="mb-6 text-lg md:text-xl">
                  {slide.pitch}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  {slide.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      className="bg-white text-[#FF0066] font-medium px-6 py-3 rounded-full hover:bg-[#FF9933] hover:text-white transition"
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
