"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/hero/hero-1.jpg",
    alt: "Tequeño con queso derretido",
  },
  {
    src: "/hero/hero-2.jpg",
    alt: "Chef con tequeños en envase",
  },
  {
    src: "/hero/hero-3.jpg",
    alt: "Productos Tequeño Bar en cocina",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 4000)
    return () => clearInterval(timer)
  }, [goToNext])

  const scrollToProducts = useCallback(() => {
    const element = document.getElementById("productos")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  return (
    <>
      {/* Delivery Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-4 text-center font-semibold">
        <p className="text-sm md:text-base">🚚 Delivery only con órdenes mayores a $75</p>
      </div>

      {/* Header with Logo */}
      <header className="absolute top-16 left-6 z-20">
        <Image src="/logo.svg" alt="El Tequeño Bar Logo" width={120} height={80} className="drop-shadow-lg" priority />
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Imagen anterior"
          type="button"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Siguiente imagen"
          type="button"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">El Tequeño Bar</h1>

          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">Tequeños gourmet para tus celebraciones</p>

          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 ease-out transform hover:scale-105 shadow-lg"
          >
            Ver Nuestros Productos
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </section>
    </>
  )
}
