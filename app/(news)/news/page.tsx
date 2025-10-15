import React from 'react';
import Section from '@/components/sectionHeader/section';
import NewsSection from '@/components/News/NewsSection';
import ContactForm from '@/components/Contact/ContactForm';

function Page() {
  return (
    <div className="min-h-screen bg-silver">
        <Section />
        
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <div className='flex flex-col text-center items-center gap-4 mb-12'>
              <p className="text-lg text-magneta font-semibold">Trending</p>
              <h1 className='text-4xl font-bold text-dark-gray'>Top Health Stories</h1>
              <p className="text-gray-600 max-w-2xl">Stay updated with the latest healthcare news and pharmacy innovations</p>
            </div>

            {/* News Sections */}
            <NewsSection subheading="Breaking News" title="Latest Updates" />
            <div className="my-12">
              <NewsSection subheading="Pharmacy Innovations" title="Industry Trends" />
            </div>
            
            {/* Contact Form */}
            <div className="mt-16">
              <ContactForm 
                title="Share Health News With Us" 
                details="Have credible health news or story tips? Submit them below and our editorial team will review your submission promptly."
              />
            </div>
        </div>
    </div>
  );
}

export default Page;
