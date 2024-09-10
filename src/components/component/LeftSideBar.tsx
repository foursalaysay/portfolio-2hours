import React from 'react'
import Recent from './sidebarContent/Recent'

export default function LeftSideBar() {
  return (
    <div className='w-[500px] h-[520px] rounded-md bg-spotifyGray-dark'>
        <Recent />
    </div>
  )
}
