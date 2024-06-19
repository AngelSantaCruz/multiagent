import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  Book,
  Bot,
  CircleUser,
  Code2,
  CreditCard,
  DollarSign,
  HomeIcon,
  LifeBuoy,
  Menu,
  Package2,
  Search,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
  Users,

} from "lucide-react"


import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../components/ui/tooltip"
import { ChatBubbleIcon } from "@radix-ui/react-icons"


export default function Page({children}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-[9vh] items-center gap-4 border-b relative">
      <div className="backdrop-blur-md bg-white/30 absolute z-10 w-full h-full"></div>
       <div className="relative z-20 w-full h-full items-center justify-between flex px-8 ">
          <nav className="flex-col gap-6 text-lg font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            > <Image src={ '/logo.svg'}  alt="logo" width={180} height={40}/>
              <span className="sr-only">Multiagent</span>
            </Link>
            
          </nav>
        
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
        </div> 
      </header>
      <div className="grid h-[91vh] w-full pl-[53px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-[90vh] flex-col border-r w-fit">
          <div className="border-b p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={'/dashboard'}>
                <Button variant="outline" size="icon" aria-label="Home">
                <HomeIcon className="size-5 fill-foreground" />
                </Button>
              </Link>
            
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                Inicio
            </TooltipContent>
          </Tooltip>
            
          </div>
          <nav className="grid gap-1 p-2 ">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'/dashboard/chats'}>
                   <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Chats"
                >
                  <ChatBubbleIcon className="size-5"  />
                </Button>
                </Link>
             
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Chats
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'/dashboard/bot'}>
                    <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Configuración del bot"
                    >
                    <Bot className="size-5" />
                    </Button>
                </Link>
                
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Configuración del bot
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>

                <Link href={'/dashboard/agents'}>
                 <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                >
                  <Users className="size-5" />
                </Button>
                </Link>
               
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Agentes
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/dashboard/documentation"}>
                 <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
                </Link>
               
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentación
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'/dashboard/settings'}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
                </Link>
                
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Configuracíon general
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Ayuda
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Perfil
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      {children}
      </div>
     
    </div>
  )
}
