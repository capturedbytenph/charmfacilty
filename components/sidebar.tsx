import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from './ui/button';
import { MdInsertChartOutlined } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='flex justify-cente flex-col'>
        
        <Button variant='ghost' className='h-full w-full flex flex-row justify-start p-4 gap-4 mb-4'>
            <Avatar className='size-12'>
                <AvatarImage  src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <div className='flex flex-col items-start'>
                <h5>FNAME LNAME</h5>
                <p className='text-xs'>System Administrator</p>

            </div>
        </Button>
        
        <Separator />

        <div className='flex flex-col items-start pt-4 gap-2'>
            <Button variant='ghost' className='flex flex-row gap-4 w-full rounded-sm justify-start'>
                <MdInsertChartOutlined className='h-6 w-6'/>
                <p className='text-base'>Dashboard</p>
            </Button>
            <Button variant='ghost' className='flex flex-row gap-4 w-full rounded-sm justify-start'>
                <MdInsertChartOutlined className='h-6 w-6'/>
                <p className='text-base'>Item Management</p>
            </Button>
        </div>
    
    
    </div>
  )
}
