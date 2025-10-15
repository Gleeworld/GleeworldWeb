export default function MedfinderPromo() {
  return (
    <section 
      className="py-20" 
      style={{ 
        background: 'linear-gradient(135deg, #E10075, #FF6B35)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Save time and money with <span style={{ color: '#F8F9FA' }}>Medfinder</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies, helping you save time, reduce costs, and get trusted care—fast and hassle-free. Experience affordability, convenience, and availability like never before. Get started today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://medfinder.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  color: '#E10075'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8F9FA';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                Visit Medfinder.com.ng
              </a>
              <a 
                href="https://medfinder.com.ng/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 text-center"
                style={{ 
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#E10075';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Download Medfinder App
              </a>
            </div>
          </div>

          {/* App Mockup/Image Placeholder */}
          <div className="flex justify-center">
            <div 
              className="rounded-2xl p-8 border backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
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
