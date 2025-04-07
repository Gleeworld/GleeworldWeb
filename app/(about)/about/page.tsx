import React from 'react';
import Section from '@/components/sectionHeader/section';
import MedfinderPromo from '@/components/Medfinder/MedfinderPromo';
import Timeline from "@/components/Timeline/Timeline";
import HealthcareFeatures from '@/components/Healthcare/Healthcare';
import Image from 'next/image';

//type Props = {}

function page({}) {
  return (
    <div>
        <Section title='about us' />

        {/* Header Section */}
        <div className="text-center pt-5 pb-6 text-black">
            <p>Gleeworld Pharmacy</p>
            <h1 className="text-3xl font-semibold">We are a New Kind of Pharmacy</h1>
        </div>    

        {/* Introduction */}
        <div className="w-1/2 mx-auto text-center">
            <Image className="w-300 h-300 mx-auto" src="/5years 1.png" width={900} height={900} alt="picture of employees" />
            <p className="mt-4 text-gray-700">
                Gleeworld is not your average Pharmacy. We are transforming the traditional pharmacy experience through innovation and technology.
            </p>
        </div>

        {/* Mission Statement Section */}
        <div className="bg-orange-50 py-12 px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 px-10">
                <h2 className="text-3xl font-bold">Mission Statement</h2>
                <p className="mt-4 text-gray-700">
                    We are reinventing the pharmacy from a shop to a primary care center. By improving access to affordable medicines and primary care for all in Nigeria, 
                    we ensure better healthcare through Artificial Intelligence (AI) technology and a patient-centered approach.
                </p>
            </div>
            <div className="md:w-1/2 rounded-lg flex justify-center">
                <Image className='rounded-lg' src="/handsJoined.webp" width={400} height={300} alt="Mission Illustration" />
            </div>
        </div>

        {/* Medfinder Promo */}
        <div className="py-5 bg-orange-50">
            <MedfinderPromo />
        </div>

        {/* Company Timeline */}
        <div>
            <Timeline />
        </div>

        {/* Management Team Section */}
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold">Management</h2>
            <p className="text-gray-700">Brains behind the startup</p>
            

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Team Member 2 */}
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <Image src="/FrameBimbo.png" width={200} height={200} className="rounded-full mx-auto" alt="COO" />
                    <h3 className="mt-4 text-lg font-semibold">Bimpe OJO</h3>
                    <p className="text-gray-600">Chief Pharmacist</p>
                </div>
          
                {/* Team Member 1 */}
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <Image src="/FrameBidemi.png" width={200} height={200} className="rounded-full mx-auto" alt="CEO" />
                    <h3 className="mt-4 text-lg font-semibold">Bidemi OJO</h3>
                    <p className="text-gray-600">Co-Founder</p>
                </div>

                {/* Add more team members as needed */}
            </div>
        </div>

        {/* Healthcare Features */}
        <div>
            <HealthcareFeatures />
        </div>
    </div>
  );
}

export default page;
