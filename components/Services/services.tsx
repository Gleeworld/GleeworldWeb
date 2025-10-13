export default function Services() {
  const services = [
    {
      title: "Prescription Delivery",
      description: "Get your medications delivered same-day to your doorstep",
      icon: "🚚",
      color: "magneta"
    },
    {
      title: "Online Consultations",
      description: "Speak with licensed healthcare professionals remotely",
      icon: "💊",
      color: "orange"
    },
    {
      title: "Medication Management",
      description: "Digital tracking and reminders for your medications",
      icon: "📱",
      color: "magneta"
    },
    {
      title: "Health Products",
      description: "Curated wellness products and over-the-counter medications",
      icon: "🏥",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            Complete <span className="text-magneta">Pharmacy</span> Care
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern healthcare solutions designed for your convenience and well-being
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-silver rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-2xl font-bold text-${service.color} mb-4`}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
