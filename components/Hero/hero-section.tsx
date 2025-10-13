export default function FlowHero() {
  return (
    <section className="bg-silver min-h-[70vh] flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-magneta">Pharmacy</span>
          <span className="text-dark-gray"> Care,</span>
          <br />
          <span className="text-orange">Delivered</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-gray mb-6 max-w-3xl mx-auto">
          Your trusted partner in healthcare. Get your medications delivered 
          fast with professional care and digital convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="https://wa.me/2348033875224" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-magneta text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Your Medications
          </a>
          <a 
            href="tel:08033875224" 
            className="border-2 border-orange text-orange px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange hover:text-white transition-all"
          >
            Speak to a Pharmacist
          </a>
        </div>
      </div>
    </section>
  );
}
