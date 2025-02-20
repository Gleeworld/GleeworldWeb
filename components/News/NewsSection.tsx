// src/components/NewsSection.tsx
import Image from 'next/image';

type Props = {
subheading: string;
title: string;

}

export default function NewsSection({ subheading, title }: Props) {
  const newsItems = [
    {
      id: '1',
      title: 'Gleeworld Pharmacy launches Medfinder app to connect users with local pharmacies.',
      description: 'Leading the way in innovative healthcare solutions, Gleeworld Pharmacy proudly introduces the MedFinder app, setting a new...',
      image: './Frame 427319431 (3).png',
    },
    {
      id: '2',
      title: 'Innovative technology tools by Gleeworld are transforming small independent pharmacies.',
      description: 'Discover how Gleeworld\'s cutting-edge technology is revolutionizing the landscape for small independent pharmacies, setting a...',
      image: './Frame 427319431 (4).png',
    },
    {
      id: '3',
      title: 'Introducing Open Patient: MedFinder App Revolutionizes Patient Access to Care',
      description: 'Effortlessly store and manage your medical information in the cloud, ensuring secure, immediate access to your health records...',
      image: './Frame 427319431 (5).png',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
        <h3 className="text-2xl font-semibold text-center mb-8">{subheading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={`/news/${item.id}`}
                className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
              >
                Read more
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