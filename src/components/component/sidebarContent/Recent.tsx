

import React from 'react'
import Image from 'next/image'
import { SidebarInfo } from './component/Constant'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

// AUTOMATIC SCROLLING
// import { useRef, useEffect } from 'react';
// import { useSpring, animated } from '@react-spring/web';


export default function Recent() {

  return (
    <div className='w-full h-[520px] text-white p-4'>
        <h3 className='text-3xl ml-1 text-spotifyGreen font-bold'>Recent</h3>
        <h4 className='text-5xl'>Experiences</h4>

        <ScrollArea className='w-full h-[400px]'>
            {SidebarInfo.map((item, index) => (
                <div key={index} className='w-full border-2 border-spotifyGreen rounded-md px-4 py-5 mt-5 flex flex-col gap-3'>
                <h3 className='text-2xl font-bold align-left'>{item.title}</h3>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className='w-full rounded-md'
                    />
                   
                    <Button asChild
                    className='text-white bg-spotifyGreen w-full hover:border-2 hover:border-spotifyGreen '
                    ><a href={item.link}>More Information</a></Button>
                </div>
            ))}
        </ScrollArea>
       
    </div>
  )
}
