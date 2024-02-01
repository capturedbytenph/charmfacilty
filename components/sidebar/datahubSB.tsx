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

export default function DatahubSB() {
    const navLinks = [
        { name: "Dashboard", href: "/datahub", icon: <FaTachometerAlt  />},
        { name: "Management", href: "/dh/management", icon: <DiDatabase />},
        { name: "Accounts", href: "/dh/accounts", icon: <AiOutlineDatabase />},
        { name: "Global Settings", href: "/dh/settings", icon: <GiSettingsKnobs />},
        
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