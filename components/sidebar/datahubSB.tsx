"use client"
import { promises as fs } from 'fs';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { usePathname} from 'next/navigation';
// ICONS

import { FaTachometerAlt } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import { AiOutlineDatabase } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiProfileLine } from "react-icons/ri";
import { PiOfficeChairBold } from "react-icons/pi";

export default function DatahubSB() {
    const navLinks = [
        { name: "Dashboard", href: "/datahub", icon: <FaTachometerAlt  />},
        { name: "Management", href: "/datahub/management", icon: <DiDatabase />},
        { name: "Patient Records", href: "/datahub/patients", icon: <RiProfileLine />},
        { name: "Employee Records", href: "/datahub/employee", icon: <PiOfficeChairBold />},
        { name: "Global Settings", href: "/datahub/settings", icon: <GiSettingsKnobs />},
        
      ]
  
    return (
        <>
            {
                navLinks.map((link,i) => {
                    const classNames = require('classname')
                    const pathname = usePathname()

                    return(
                        <Button variant='ghost' asChild key={i} className='flex justify-start'>
                            <Link key={i} className='flex flex-row gap-4 w-full rounded-sm justify-start' href={link.href}>
                            <span className='text-xl py-0.5'>{link.icon}</span>
                            <p className='text-base'>{link.name}</p>
                            </Link>
                            
                        </Button>
                   
                    )
                } )
                }   
        </>
      );
  //...
}