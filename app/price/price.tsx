import React from 'react'
import NavBar from '../../components/Navbar'
import Footer from '../../components/footer'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { cn } from '../../lib/utils'
import { BellRing, Check, SwitchCamera, SwitchCameraIcon } from 'lucide-react'

type CardProps = React.ComponentProps<typeof Card>
function Price({ className, ...props }: CardProps) {
    

    const notifications = [
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        {
          title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description: "",
        },
        
      ]
  return (
    <>
    <NavBar/>
    <main className='p-20 pt-[18vh] h-[120vh] flex flex-col items-center gap-8'>
      <h1 className='text-5xl text-teal-500 font-semibold text-center'>
        No esperes más e impulsa tu negocio con nosotros
      </h1>
      <h3 className='text-xl text-slate-500 font-semibold text-center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
    <div className='flex flex-col  gap-8 lg:flex-row '>
       <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className='text-xl'>Versión gratuita</CardTitle>
        <CardDescription>descripción del paquete</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-500 text-white">
          <Check className="mr-2 h-4 w-4" /> Empieza ya 
        </Button>
      </CardFooter>
    </Card>
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle  className='text-xl'>Versión premiun</CardTitle>
        <CardDescription>descripción del paquete</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-500 text-white">
          <Check className="mr-2 h-4 w-4" /> Empieza ya 
        </Button>
      </CardFooter>
    </Card>
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle  className='text-xl'>Versión pro </CardTitle>
        <CardDescription>descripción del paquete</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal-500 text-white">
          <Check className="mr-2 h-4 w-4" /> Empieza ya 
        </Button>
      </CardFooter>
    </Card>
    </div>
   

    </main>
    <Footer/>
    </>
  )
}

export default Price