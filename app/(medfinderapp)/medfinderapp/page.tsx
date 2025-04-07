import React from 'react'
import Section from '@/components/sectionHeader/section';
import MedfinderPromo from '@/components/Medfinder/MedfinderPromo';

//type Props = {};

function page({}) {
  return (
    <div className='bg-orange-50'>
        <Section />
        <div className='pt-5 pb-6'>
        <MedfinderPromo />
        </div>
    </div>
  )
}

export default page;
