import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Datahub() {
  return (
    <div>
      <h1 className='text-lg'>Dashboard</h1>
      <Separator className='my-5'/>
       <Card className="p-10">
        <CardTitle className='mb-5'>
          TRANSACTIONS
        </CardTitle>
        <CardContent>
          
        </CardContent>
       
       </Card>
      
    </div>
  )
}
