import React from 'react';
import Section from '@/components/sectionHeader/section';
import MedfinderPromo from '@/components/Medfinder/MedfinderPromo';
import ServiceList from "@/components/ServiceList/ServiceList";
import Accordion from '@/components/FAQ/Accordion';

//type Props = {};

const page = () => {
  return (
    <div>
     <Section />
      <ServiceList />
      <Accordion />
      <MedfinderPromo />
    </div>
  )
}

export default page;
