import Image from 'next/image';

export default function Services() {
    const services = [
      {
        id: '1',
        title: 'Telepharmacy Services',
        description: 'Receive expert healthcare advice from the comfort of your home. Consult remotely with our professional pharmacists.',
        image: './Frame 427319431.png',
        linkText: 'Chat Now',
        linkUrl: '/services/telepharmacy'
      },
      {
        id: '2',
        title: 'Delivery Services',
        description: 'Order medications for yourself, your family, or your employees with ease. Never miss a dose again.',
        image: './Frame 427319431 (1).png',
        linkText: 'Submit Order',
        linkUrl: '/services/delivery'
      },
      {
        id: '3',
        title: 'Pharmaceutical Distribution',
        description: 'We are a trusted partner for independent pharmacies across Nigeria.',
        image: './Frame 427319431 (2).png',
        linkText: 'Submit Order',
        linkUrl: '/services/distribution'
      }
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.linkUrl}
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  {service.linkText}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }