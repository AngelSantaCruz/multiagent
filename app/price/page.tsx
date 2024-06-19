import React from 'react'
import NavBar from '../../components/Navbar'
import Footer from '../../components/footer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { cn } from '../../lib/utils'
import { BellRing, Check, SwitchCamera, SwitchCameraIcon } from 'lucide-react'
import Price from './price'

function Page() {
   return( 
    <Price/>
  )
}

export default Page