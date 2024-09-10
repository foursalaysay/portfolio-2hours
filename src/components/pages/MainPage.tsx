import React from 'react'
import TopImage from '../component/mainpage/TopImage'
import Skills from '../component/mainpage/Skills'
import { Separator } from '@radix-ui/react-separator'

export default function MainPage() {
  return (
    <div className='w-full h-full'>
        <TopImage />
        <Separator />
        <Skills />
    </div>
  )
}
