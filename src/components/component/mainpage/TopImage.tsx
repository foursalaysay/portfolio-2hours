import React from 'react'
import Image from 'next/image'


export default function TopImage(){
  return (
    <div className='w-full h-[324px] rounded-md bg-center bg-cover shadow-inner flex items-center p-4 relative'
    style={{ backgroundImage: 'url(/qer.jpg)' }}
>
   {/* Pseudo-element created with Tailwind classes */}
   <div className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url(/qer.jpg)', filter: 'blur(50px)' }}
   ></div>

    {/* sidebar */}









    
   {/* Content */}
            <div className='relative z-10 flex-shrink-0'>
                <Image
                    className='w-[200px] h-[200px] rounded-full'
                    src='/yeah.jpg'
                    alt='profile-image'
                    width={200}
                    height={200}
                />
            </div>
            <div className='relative z-10 ml-4'>
                <h1 className='text-9xl font-black text-white font-poppins pb-5'>Kyle</h1>
                <h5 className='ml-2 text-lg text-white'>
                    Rosen Ambassador | Web3 Enthusiast | Student | Aspiring Blockchain Developer
                </h5>
            </div>
</div>

    )
}
