export default function MedfinderPromo() {
  return (
    <section
      className="w-full py-20 text-white relative"
      style={{
        background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Save time and money with{" "}
              <span className="underline decoration-white/40">Medfinder</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-white/90">
              Discover a simpler way to access the medicines you need. Medfinder
              connects you to nearby pharmacies, helping you save time, reduce
              costs, and get trusted care—fast and hassle-free. Experience
              affordability, convenience, and availability like never before.
              Get started today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://medfinder.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#FF6B35] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Visit Medfinder.com.ng
              </a>
              <a
                href="https://medfinder.com.ng/download"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#FF6B35] transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Download Medfinder App
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/30 shadow-2xl backdrop-blur-sm">
              <img
                src="/medfinder-app-preview.png"
                alt="Medfinder App Preview"
                className="rounded-2xl w-[300px] h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
