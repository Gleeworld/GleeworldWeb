import React from 'react';
import Image from 'next/image';



type Props = { title : string };

function Section({ title }: Props) {
  return (
    <div className='bg-gray-100 h-500 w-50'>

<div>
    <h1 className='absolute capitalize top-10 left-10 right-10 bottom-10'>{title}</h1>
    <Image className='mx-auto w-100 h-100 relative' src="/Mobile Marketing-pana 1.png" alt='hero' width={500} height={500}  />

</div>

<Image className="absolute left-0 top-0 w-40 h-50" src="/Union.png" alt='cross' width={500} height={500} />


    </div>
  )
}

export default Section;