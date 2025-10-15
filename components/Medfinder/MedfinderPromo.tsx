export default function MedfinderPromo() {
  return (
    <section className="py-20 bg-gradient-to-r from-magneta to-orange"> {/* Back to orange gradient */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - WHITE TEXT for colored background */}
          <div className="text-white"> {/* Changed back to white text */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save time and money with <span className="text-silver">Medfinder</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies, helping you save time, reduce costs, and get trusted care—fast and hassle-free. Experience affordability, convenience, and availability like never before. Get started today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://medfinder.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-magneta px-8 py-4 rounded-full text-lg font-semibold hover:bg-silver transition-all duration-300 text-center"
              >
                Visit Medfinder.com.ng
              </a>
              <a 
                href="https://medfinder.com.ng/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-magneta transition-all duration-300 text-center"
              >
                Download Medfinder App
              </a>
            </div>
          </div>

          {/* App Mockup/Image Placeholder */}
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Medfinder App</h3>
                <p className="opacity-90">Your pharmacy companion</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
