"use client"
import React, { useState } from 'react'


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoApps } from "react-icons/io5";

import { MdLocalPharmacy } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { SiTestrail } from "react-icons/si";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineHub } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";

export default function Appmenu() {
  const navLinks = [
    { name: 'Data Hub', icon: <MdOutlineHub /> , href: "/" },
    { name: 'Patient Service', icon: <MdLocalHospital />, href: "/1" },
    { name: 'Health Records', icon: <FaUserDoctor />, href: "/2" },
    { name: 'Diagnostics', icon: <SiTestrail />, href: "/3" },
    { name: 'Pharmacy', icon: <MdLocalPharmacy />, href: "/4" },
    { name: 'Billing', icon: <FaMoneyBillTransfer />, href: "/5" },
    { name: 'Inventory', icon: <MdOutlineInventory />, href: "/6"},
    { name: 'Reports', icon: <BiSolidReport />, href: "/7" },
    { name: 'Help & Supports', icon: <IoIosHelpCircleOutline />,href: "/8" },
    
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <IoApps className="h-6 w-6 " />
          
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {
            navLinks.map((link) => {
               
                return(
                  <DropdownMenuItem className='p-4 gap-4'>
                    <span className='text-xl py-0.5'>{link.icon}</span><p className='font-medium'>{link.name}</p>
                  </DropdownMenuItem>

                )
            } )
            
        }


      </DropdownMenuContent>



     
    </DropdownMenu>
      
  
  )
}
