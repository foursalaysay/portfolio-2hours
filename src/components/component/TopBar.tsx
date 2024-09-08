'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Separator } from '../ui/separator'
import Image from 'next/image'
import profile from '../images/john.png'
import fb from '../images/pesbok.png'
import x from '../images/x.png'
import lk from '../images/lk.png'
import tg from '../images/tg.png'


const links = [
  {
    label: "facebook",
    value: "https://www.facebook.com/kailsalaysay/",
    image: fb
  },
  {
    label: "twitter",
    value: "https://x.com/kyle_salaysay",
    image: x
  },
  {
    label: "linkedin",
    value: "https://www.linkedin.com/in/kyle-salaysay/",
    image: lk
  },
  {
    label: "telegram",
    value: "https://t.me/kai_ili",
    image: tg
  }
];

export default function TopBar() {
  return (
    <div className='h-20 w-full p-12 bg-black flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center '>
      

      {/* SEARCH BAR */}
      <div className='flex gap-1 w-96 justify-center items-center'>
        <Input
          className='w-[300px] lg:w-[600px] px-4 py-3 mt-2 rounded-full h-12 bg-[#333333] text-sm text-white border-none'
          placeholder='Search topics about my profile...'
        />
      </div>

    {/* LOGO */}
    
    <div className='flex flex-col gap-2 items-center justify-center mb-3'>
    <Image
        src={profile}
        width={50}
        height={50}
        alt='Profile Image'
        className='rounded-full block lg:hidden'
      />
        <h4 className='text-white block lg:hidden'>John Kyle L. Salaysay</h4>
        <Separator />
    </div>
     

      {/* ADDITIONAL BUTTONS / LINKS TO SOCIAL MEDIA */}
      <div className='flex gap-7 justify-around items-center'>
        {links.map((link) => (
          <a key={link.label} href={link.value}>
            <Image
              src={link.image}
              width={30}
              height={30}
              alt={link.label}
            />
          </a>
        ))}
        
      </div>
    </div>
  )
}
