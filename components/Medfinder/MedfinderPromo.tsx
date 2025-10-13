export default function MedfinderPromo() {
  return (
    <section className="py-20 bg-white"> {/* Changed to white background */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - DARK TEXT for white background */}
          <div className="text-dark-gray"> {/* Changed to dark-gray */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save time and money with <span className="text-magneta">Medfinder</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-gray-700">
              Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies, helping you save time, reduce costs, and get trusted care—fast and hassle-free. Experience affordability, convenience, and availability like never before. Get started today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://medfinder.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-magneta text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange transition-all duration-300 text-center"
              >
                Visit Medfinder.com.ng
              </a>
              <a 
                href="https://medfinder.com.ng/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-orange text-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange hover:text-white transition-all duration-300 text-center"
              >
                Download Medfinder App
              </a>
            </div>
          </div>

          {/* App Mockup/Image Placeholder */}
          <div className="flex justify-center">
            <div className="bg-silver rounded-2xl p-8 border border-gray-200">
              <div className="text-center text-dark-gray">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2 text-magneta">Medfinder App</h3>
                <p className="text-gray-600">Your pharmacy companion</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
