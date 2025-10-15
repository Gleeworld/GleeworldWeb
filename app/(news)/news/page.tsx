import React from 'react';
import NewsSection from '@/components/News/NewsSection';
import ContactForm from '@/components/Contact/ContactForm';

function page() {
  return (
    <div>
      <div className='flex-col text-center items-center gap-5 pt-15'>
        <p>Trending</p>
        <h1 className='text-3xl text-black'>Top Stories</h1>
      </div>

      <NewsSection subheading={"Trending"} title={"Top Stories"} />

      <NewsSection subheading={""} title={""} />

      <ContactForm
        title='Share with us'
        topText='Do you have credible health news?'
        subHeading=''
        details='Please provide as many details as possible to help us understand and verify the information. Our editorial team will review your submission and get back to you promptly.'
      />
    </div>
  );
}

export default page;
