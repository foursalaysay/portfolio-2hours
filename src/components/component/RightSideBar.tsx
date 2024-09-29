import React from 'react'
import Image from 'next/image';

interface stackProps {
  label : string;
  image : string;
}
const stacks : stackProps[] = [
  {
    label : 'HTML',
    image : '/code.jpg'
  },
  {
    label : 'Tailwind',
    image : '/code.jpg'
  }
]

export default function RightSidebar() {

  
  return (
    <div className='w-[300px] h-[520px] bg-spotifyGray-dark rounded-md flex flex-col py-5'>
        <h1 className='text-center font-bold text-xl pb-5'>Tech Stack</h1>
        <div className='w-full h-full pl-3'>
          {stacks.map((stack)=>(
            <div key={stack.label} className='flex flex-row gap-4 justify-start items-center py-1'>
                <Image
                className='h-10 w-10 rounded-full'
                src={stack.image}
                width={200}
                height={200}
                alt={stack.label}
                />
                <p>{stack.label}</p> 
            </div>
          ))}
        </div>
    </div>
  )
}
