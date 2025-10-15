export default function MedfinderPromo() {
  return (
    <div className="w-full py-20 bg-orange-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save time and money with Medfinder
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies, helping you save time, reduce costs, and get trusted care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://medfinder.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Visit Medfinder.com.ng
              </a>
              <a 
                href="https://medfinder.com.ng/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all"
              >
                Download App
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-white bg-opacity-20 rounded-2xl p-8 border border-white border-opacity-30">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Medfinder App</h3>
                <p>Your pharmacy companion</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
