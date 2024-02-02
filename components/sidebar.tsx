import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from './ui/button';
import DatahubSB from './sidebar/datahubSB';
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className='flex justify-cente flex-col mt-5 pl-2'>
        
        <Button variant='ghost' className='h-full w-full flex flex-row justify-start p-4 gap-4 mb-4'>
            <Avatar className='size-12'>
                <AvatarImage src="/profilePic.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <div className='flex flex-col items-start'>
                <h5>FNAME LNAME</h5>
                <p className='text-xs'>System Administrator</p>

            </div>
        </Button>
        
        <Separator />

        <div className='flex flex-col items-start pt-4 gap-2'>
            <DatahubSB />
            
        </div>
    
        
    </div>
  )
}
