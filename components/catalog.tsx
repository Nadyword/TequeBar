"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types"
import { useCallback } from "react"
import Image from "next/image"

const products: Product[] = [
  {
    id: "1",
    name: "Tequeños de queso Premium",
    description: "Tequeños clásicos de queso blanco",
    price: 40.0,
    imageSrc: "/products/topops-100.jpg",
    units: 100,
  },
  {
    id: "2",
    name: "Tequeños de chocolate",
    description: "Tequeños rellenos de chocolate",
    price: 15.0,
    imageSrc: "/products/Chocolate.png",
    units: 20,
  },
  {
    id: "3",
    name: "Tequeños Familiares",
    description: "Caja familiar de tequeños tradicionales",
    price: 100.0,
    imageSrc: "/products/tequeños-150.jpg",
    units: 150,
  },
  {
    id: "4",
    name: "Tequeños de queso blanco",
    description: "Tequeños de queso blanco ideal para eventos",
    price: 40.0,
    imageSrc: "/products/PLAIN50_280x.avif",
    units: 50,
  },
  {
    id: "5",
    name: "Nuevos Guavaqueños",
    description: "Tequeños de queso blanco con guava",
    price: 12.0,
    imageSrc: "/products/Guavaquenos.png",
    units: 15,
  }
]

export default function Catalog() {
  const handleWhatsAppOrder = useCallback((product: Product) => {
    const message = `Hola El Tequebar, quiero ordenar: ${product.name} (${product.units} unidades) - $${product.price}`
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }, [])

  return (
    <section id="productos" className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de tequeños gourmet, hechos con ingredientes frescos y amor venezolano
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-80 snap-start shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.imageSrc || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 400px"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                      <span className="text-sm text-gray-500">{product.units} unidades</span>
                    </div>
                    <Button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
                    >
                      Ordenar vía WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <span className="text-sm text-gray-500">{product.units} unidades</span>
                  </div>
                  <Button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
                  >
                    Ordenar vía WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
