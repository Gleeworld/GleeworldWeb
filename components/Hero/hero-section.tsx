export default function FlowHero() {
  return (
    <section className="bg-silver min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-magneta">Pharmacy</span>
          <span className="text-dark-gray"> Care,</span>
          <br />
          <span className="text-orange">Delivered</span>
        </h1>
        <p className="text-xl md:text-2xl text-dark-gray mb-8 max-w-3xl mx-auto">
          Your trusted partner in healthcare. Get your medications delivered 
          fast with professional care and digital convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-magneta text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
            Get Your Medications
          </button>
          <button className="border-2 border-orange text-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange hover:text-white transition-all">
            Speak to a Pharmacist
          </button>
        </div>
      </div>
    </section>
  );
}
