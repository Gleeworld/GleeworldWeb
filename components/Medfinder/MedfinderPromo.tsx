export default function MedfinderPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gray">
          Save time and money with <span className="text-magneta">Medfinder</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies, helping you save time, reduce costs, and get trusted care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://medfinder.com.ng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-magneta text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all min-w-[250px]"
          >
            Visit Medfinder.com.ng
          </a>
          <a 
            href="https://medfinder.com.ng/download" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-orange text-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange hover:text-white transition-all min-w-[250px]"
          >
            Download App
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          Available on iOS and Android
        </div>
      </div>
    </section>
  );
}
