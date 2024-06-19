import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import MessengerIcon from '../../../components/icons/MessengerIcon'
import WhatsappIcon from '../../../components/icons/WhatsappIcon'

export default function Modal() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" className="bg-teal-600 text-white">Agregar cuenta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]  ">
        <DialogHeader>
          <DialogTitle>Nueva cuenta</DialogTitle>
          <DialogDescription>
            sincroniza una nueva cuenta para poder interactuar con ella en la aplicación 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="flex flex-col gap-4 items-start">
            <Label htmlFor="name" className="text-right">
              Cuenta
            </Label>
            <Select  onValueChange={(e:string) => {
              
            }} >
              <SelectTrigger
              
                id="model"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder={'Selecciona una cuenta'} />
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
          </div>
        
          <div className=" items-start gap-4 flex flex-col">
            <Label htmlFor="name" className="text-right">
              Correo
            </Label>
            <Input
              id="email"
              defaultValue="correo@correo.com"
              className="col-span-3"
            />
          </div>
          <div className="items-start gap-4 flex flex-col">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Sincronizar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
