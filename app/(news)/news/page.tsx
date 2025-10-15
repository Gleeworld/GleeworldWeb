import React from 'react';
import NewsSection from '@/components/News/NewsSection';
import ContactForm from '@/components/Contact/ContactForm';

function Page() {
  return (
    <div>
        <div>
            <div className='flex flex-col text-center items-center gap-5 pt-15'>
              <p className="text-lg text-gray-600">Trending</p>
              <h1 className='text-3xl font-bold text-dark-gray'>Top Stories</h1>
            </div>

            <NewsSection subheading="Trending" title="Top Stories" />

            <NewsSection subheading="Latest Updates" title="Healthcare News" />

            <ContactForm 
              title="Share Health News With Us" 
              details="Do you have credible health news? Please provide as many details as possible to help us understand and verify the information. Our editorial team will review your submission and get back to you promptly."
            />
        </div>
    </div>
  );
}

export default Page;
