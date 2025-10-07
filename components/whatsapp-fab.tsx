"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function WhatsappFab() {
  const handleWhatsAppClick = () => {
    const message = "Hola El Tequebar, quiero hacer un pedido"
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 z-50"
            size="icon"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="sr-only">Chatea y haz tu pedido</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chatea y haz tu pedido</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
