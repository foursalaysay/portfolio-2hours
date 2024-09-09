import React from 'react'
import bottomBarImage from '../images/bottombar.png'
import Image from 'next/image'


export default function BottomBar() {
  return (
    <div className='w-screen h-[101px] bg-black'>
        <Image
        className='w-full'
        src={bottomBarImage}
        alt='image-bottom'
        />
    </div>
  )
}
