'use client'

import MainPage from "@/components/pages/MainPage";
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from "next/navigation";

// LIST OF ROUTES

// MAINPAGE - mainpage



export default function Home() {

  const pathname = usePathname();

  return (
   <div className="w-full bg-spotifyGray-dark rounded-md">
     <ScrollArea className="w-full h-[520px]"> 
      {pathname.includes('/') ? <MainPage /> : null}
     
     </ScrollArea>
   </div>
  );
}
