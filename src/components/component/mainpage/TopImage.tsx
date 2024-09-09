import React from 'react'
import Image from 'next/image'


export default function TopImage(){
  return (
    <div className='w-full h-[324px] rounded-md bg-center bg-cover shadow-inner flex items-center p-4'
            style={{ backgroundImage: 'url(/qer.jpg)' }} 
        >
            <div className='flex-shrink-0'>
                <Image
                    className='w-[200px] h-[200px] rounded-full'
                    src='/yeah.jpg'
                    alt='profile-image'
                    width={200}
                    height={200}
                />
            </div>
            <div className='ml-4'>
                <h1 className='text-8xl font-bold text-white mb-1'>Kyle Salaysay</h1>
                <h5 className='ml-2 text-lg text-white'>
                    Rosen Ambassador | Web3 Enthusiast | Student | Aspiring Blockchain Developer
                </h5>
            </div>
        </div>
    )
}
