export default function Stats() {
  const stats = [
    { 
      number: "150k+", 
      label: "Prescriptions Delivered" 
    },
    { 
      number: "15k+", 
      label: "Patients Treated" 
    },
    { 
      number: "150+", 
      label: "Pharmacies & Hospitals Supplied" 
    },
    { 
      number: "24/7", 
      label: "Pharmacy Support" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-magneta to-orange text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Your original heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Here&apos;s why we are better
        </h2>
        
        {/* Updated grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
