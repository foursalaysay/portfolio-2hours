import React from 'react'
import Image from 'next/image';

interface projectProps {
    title : string;
    img : string;


}

const projects : projectProps[] = [
    {
        title : "CareConnect",
        img : '/code.jpg'
    }
]

export default function ProjectPage() {

  
  return (
    <div className='flex flex-col p-5 h-full w-full'>
        <h1>Projects</h1>
        <div className='flex flex-wrap gap-10'>
            {projects.map((project)=>(
                <div key={project.title} className='flex flex-col gap-2 items-center justify-start'>
                    <Image
                        src={project.img}
                        height={200}
                        width={200}
                        alt={project.title}
                    />
                    <p>{project.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
