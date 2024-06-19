'use client'
import React, { useState } from 'react'
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
  } from "lucide-react"
  import WhatsappIcon from '@/components/icons/WhatsappIcon'
  import { ChatBubbleIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
  import MessengerIcon from '@/components/icons/MessengerIcon'
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { textChat } from '../../constants'

interface chat{
  msjs:any[],
  idAccount:String,

}

type contact={
  chats:any[],
  type:"Instagram"|"Messenger"|"Whatsapp"
  idAccount:String,

}


function Page() {
  const [account,setAccount]=useState(textChat.select)
  const [data,setData]=useState<contact|null>(null)
  const [chatSelected,setChatSelected]=useState<chat|null>(null)

  const fetchData=(e:string)=>{
    setData(()=>e==="Instagram"?{
      chats:[{
        msjs:[{
          user:"Hector Jose",
          text:"qlq",
          date:""
        }],
        user:"Hector Jose",
        idAccount:"ID"
      },
      {
        msjs:[{
          user:"Carmen paola",
          text:"hola",
          date:""
        }],
        user:"Carmen paola",
        idAccount:"ID"
      },
      {
        msjs:[{
          user:"Valery Hernandez",
          text:"como",
          date:""
        }],
        user:"Valery Hernandez",
        idAccount:"ID"
      }],
      type:"Instagram",
      idAccount:""
    }:e==="Whatsapp"?
    {
      chats:[{
        msjs:[{
          user:"Hector Jose",
          text:"qlq",
          date:""
        }],
        user:"Hector Jose",
        idAccount:"ID"
      },
      {
        msjs:[{
          user:"Carmen paola",
          text:"hola",
          date:""
        }],
        user:"Carmen paola",
        idAccount:"ID"
      },
     ],
      type:"Whatsapp",
      idAccount:""
    }:null)
  }

  const handleChat=(index:number)=>{
    if(data !==null ){
    setChatSelected(data.chats[index])
    }
    
  }
  return (
    <div className="flex flex-col">
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">Mensajes</h1>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChatBubbleIcon className="size-4" />
            <span className="sr-only">Mensajes</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Mensajes</DrawerTitle>
          </DrawerHeader>
          <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
               Cuentas
              </legend>
              <div className="grid gap-3">
                <Select onValueChange={(e:string) => setAccount(e)}>
                  <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder={account}></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Whatsapp">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Rabbit className="size-5" />
                        <div className="grid gap-0.5">
                          <span>Whatsapp</span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="Messenger">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Bird className="size-5" />
                        <div className="grid gap-0.5">
                          <span>Messenger</span>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="Instagram">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Turtle className="size-5" />
                        <div className="grid gap-0.5">
                        <span>Instagram</span>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
          
            </fieldset>
          
            <fieldset className="grid gap-6 rounded-lg border p-4 h-[55vh]">
                <legend className="-ml-1 px-1 text-sm font-medium">
                Chats
                </legend>
                <div className="flex gap-3 flex flex-col">
                <Card x-chunk="dashboard-01-chunk-5">
                  <CardHeader className='flex flex-row gap-4 items-center'>
                      <Avatar className="hidden h-12 w-12 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                    <CardTitle> Olivia Martin </CardTitle>
                  </CardHeader>
                  <CardContent className="grid ">
                    <div className="flex justify-between gap-4">
                      <div className='flex flex-row gap-4'>
                        
                        <div className="grid gap-1">
                         
                          <p className="text-sm text-muted-foreground">
                            olivia.martin@email.com
                          </p>
                        </div>
                      </div>
                      
                      <span className="w-4 h-4 rounded-full bg-red-400"></span>
                    </div>
                    
                  </CardContent>
                </Card>
               
                </div>
               
            </fieldset>
              
            
          </form>
        </DrawerContent>
      </Drawer>
      
    </header>
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="relative hidden flex-col items-start gap-8 md:flex " x-chunk="dashboard-03-chunk-0"
      >
        <section className="grid w-full items-start gap-6 ">
          <fieldset className="grid gap-6 rounded-lg border p-4 h-[75vh]">
            <legend className="-ml-1 px-1 text-sm font-medium">
            <Select  onValueChange={(e:string) => {
              setChatSelected(null)
              setAccount(e)
              fetchData(e)
              }} >
                <SelectTrigger
                
                  id="model"
                  className="items-start [&_[data-description]]:hidden"
                >
                  <SelectValue placeholder={account} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Whatsapp">
                    <div className="flex items-start gap-3 text-muted-foreground ">
                      <WhatsappIcon className="size-5 " />
                      <div className="grid gap-0.5">
                      <span>Whatsapp</span>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Messenger">
                    <div className="flex items-start gap-3 text-muted-foreground ">
                      <MessengerIcon className="size-5" />
                      <div className="grid gap-0.5">
                       <span>Messenger</span>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Instagram">
                    <div className="flex items-start gap-3 text-muted-foreground ">
                      <InstagramLogoIcon className="size-5" />
                      <div className="grid gap-0.5">
                       <span>Instagram</span>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
            </Select>
            </legend>

            <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                Chats
                </legend>
                <div className="flex gap-3 flex flex-col">
               {data!==null && data? data.chats.map((item,index)=>{
                return (
                  <Card key={index} onClick={()=>handleChat(index)} x-chunk="dashboard-01-chunk-5" className='cursor-pointer'>
                  <CardHeader className='flex flex-row gap-4 items-center'>
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>{item?.user?.substr(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    <CardTitle>{item?.user[0].toUpperCase() + item?.user.slice(1) }</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-8">
                    <div className="flex justify-between gap-4">
                      
                      <div className="grid gap-1">
                        
                        <p className="text-sm text-muted-foreground">
                          correo@email.com
                        </p>
                      </div>
                      <span className="w-4 h-4 rounded-full bg-red-400"></span>
                    </div>
                    
                  </CardContent>
                </Card>
                )
               }):
               <span>{textChat.noChat}</span>}
               
                </div>
               
            </fieldset>
          </fieldset>
          
        </section>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
       
       
        <div className='h-[60vh] w-full rounded-lg bg-gray-200 overflow-y-scroll flex flex-col gap-4 p-6'>
          {chatSelected !== null ? chatSelected.msjs.map((item,index)=>{
            return (<p className={`text-wrap text-md md:text-lg text-white w-3/4  p-4 rounded-lg 
            ${account==='Whatsapp'?' bg-green-600'
            :account==='Instagram'?' bg-rose-600'
            :account==='Messenger'?' bg-blue-600'
            :' bg-neutral-600'}`} 
            key={index}>

            {item.text}
            </p>)
          })
          :<span>{textChat.noChat}</span>
}
        </div>
        
        <form
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Mensaje
          </Label>
          <Textarea
            id="message"
            placeholder={textChat.inputTextPlaceholder}
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Subir archivo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Subir archivo</TooltipContent>
            </Tooltip>
            
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              {textChat.button}
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  </div>

  )
}

export default Page