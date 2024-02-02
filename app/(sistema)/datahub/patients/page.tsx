import React from 'react'
import { Input } from "@/components/ui/input"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ImMenu } from "react-icons/im";
import { Button } from "@/components/ui/button"
import { BsFillGearFill } from "react-icons/bs";
import { GrDocumentTest } from "react-icons/gr";
import { SiCashapp } from "react-icons/si";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdFilterList } from "react-icons/md";
const patientData = [
    {
        name: "Henry Tadlip", 
        patientid: "1237123",
        avatar: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/67559_1665435804177_6645567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=b9145c&_nc_ohc=N4A0qFc53LQAX_XQpX0&_nc_oc=AQmqoOMPQ5FncGidg6baWIGGE17BTyf3qBy6WC0dfUnVHGrCC1mttkPSwnvbMQFWkeEeydiWATq8po_YnEUY_hh8&_nc_ht=scontent-lga3-2.xx&oh=00_AfAuVWNQ0qllUgkFy8dxWpsX7gEnIHjoLrapZNPc8_iZ9w&oe=65E39BEC"
    },
    {
        name: "Raymond Costelo", 
        patientid: "3452434",
        avatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/425763_383188465026138_1449478943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=LCnbyscScOEAX8SRfnW&_nc_ht=scontent-lga3-1.xx&oh=00_AfBzCUjpLMX2QiklVWzu-di91a4_aqcxnVl8lTElWtEb5w&oe=65E382A3"
    },
    {
        name: "Jason Agripa", 
        patientid: "123144341",
        avatar: "https://image.api.playstation.com/vulcan/img/cfn/11307e_vAhIeRQUAtTsz1mDPJ4rI0X7xsOOsrZJNaakqsAk88ndrVfanA4F_mBT3wA4oVYkw0Sy4E65k25kiJzC4U2AR9OhR.png?w=440&thumb=false"
    },
    {
        name: "Jojie Bisnar", 
        patientid: "78978",
        avatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/90522436_3026849090670294_2316426895257763840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=4GPewXmemfMAX9-JGQt&_nc_ht=scontent-lga3-1.xx&oh=00_AfBAx4XcVqLlEzcl6YNWd8bsEAsVjxiCLRLGTbtethtRyg&oe=65E38A1D"
    },
    {
        name: "Kirby Gonzales", 
        patientid: "123123",
        avatar: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.18169-9/25634_103531836348463_7376002_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=EIsorvaR1cQAX8oKv8T&_nc_ht=scontent-lga3-2.xx&oh=00_AfAg93ZKRMa5Bh-BkngycVkrYK5hSCsXa02uJf7EvPrwoQ&oe=65E38C10"
    }
    
]


export default function Patients() {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h1 className='text-xl font-semibold'>Patient Records</h1>
            <span className='text-xs'>Master List of all the Patients.</span>
        </div>
        
        <div className="relative flex items-center max-w-2xl ">
        <HiMagnifyingGlass  className="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 transform" />
        <Input
            placeholder="Your search..."
            className="pl-9"
        />
        </div>
        <Table>
            <TableHeader>
                <TableRow className='flex items-center justify-center'>
                    <TableHead className='flex justify-center items-center '>
                        <Button variant="ghost" className='p-2'>
                            <MdFilterList className=' h-5 w-5 '/>            
                        </Button>
                    </TableHead>
                    <TableHead className="flex justify-start items-center flex-1">Full Name</TableHead>
                    
                </TableRow>
            </TableHeader>
            <TableBody>
            {
                patientData.map((pt, i) => {
                    return(
                        <TableRow className='flex flex-row items-center' key={i}>
                            <TableCell>
                                <Avatar className='size-12'>
                                    <AvatarImage src={pt.avatar} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className='flex-1 flex-col'>
                                <h1 className='text-base'>{pt.name}</h1>
                                <span className='text-xs'>PatientID: {pt.patientid}</span>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" className='p-2'>
                                    <ImMenu className=' h-5 w-5 '/>
                                    
                                </Button>
                                <Button variant="ghost" className='p-2'>
                                <GrDocumentTest className=' h-5 w-5 '/>
                                </Button>
                                <Button variant="ghost" className='p-2'>
                                <SiCashapp className=' h-5 w-5 '/>
                                </Button>
                                <Button variant="ghost" className='p-2'>
                                <BsFillGearFill className=' h-5 w-5 '/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    
                    )
                })
            }
            </TableBody>

            
        </Table>
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    </div>
  )
}
