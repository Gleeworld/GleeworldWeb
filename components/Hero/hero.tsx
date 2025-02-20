//import Image from 'next/image';
import heroImage from "./Group 71.png"


export default function Hero() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Medication Access Made Easy
            </h1>
            <p className="text-gray-600 mb-8">
              Empowering Independent Pharmacies, Connecting communities, 
              we are committed to strengthening the bonds between local 
              pharmacies and the people they serve.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Order Medication Now
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="./Group 71.png"
              alt="Medication Access Illustration"
              width={600}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}