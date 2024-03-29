"use client"
import { Button } from "@/components/ui/button"
import { DarkLight } from "@/components/darklight";

import  Appmenu  from "@/components/appmenu";

import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { PiHeartbeatFill } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaHospitalSymbol } from "react-icons/fa";
export default function Navmenu() {
  return (
    <div className="flex shadow-lg py-4 px-5 item-center">
      <div className="flex items-center flex-row gap-2"><FaHospitalSymbol fontSize={32} /><h1 className="font-bold">OSPITAL NG PILIPINAS</h1></div>
      
      <div className='flex flex-row pl-3 px-0'>
                            <PiHeartbeatFill fontSize={32} className='text-red-500'/>
                            <div className='flex flex-col pl-2'>
                                <span className='text-xs'>POWERED BY</span>
                                <span className='font-black text-lg leading-4 tracking-widest'>CHARMS</span>
                            </div>
                        </div>
      
      <div className="flex flex-1 justify-end items-center">
      <Appmenu />

      <Button variant="ghost"><IoNotificationsOutline className="h-6 w-6" /></Button>
      <Button variant="ghost"><RiMessage2Line className="h-6 w-6" /></Button>
      <Button variant="ghost"><MdLogout className="h-6 w-6" /></Button>

      <DarkLight />
      
    </div>
    </div>

    

  )
}
