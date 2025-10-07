import type { Metadata } from "next"
import HeroCarousel from "@/components/hero-video"
import Catalog from "@/components/catalog"
import ReviewCarousel from "@/components/review-carousel"
import WhatsappFab from "@/components/whatsapp-fab"
import { getGoogleReviews } from "@/lib/google-reviews"

export const metadata: Metadata = {
  title: "El Tequebar | Tequeños gourmet en Orlando",
  description:
    "Servicio de tequeños gourmet tipo mobile bar para eventos en Orlando. Tequeños frescos y deliciosos para tus celebraciones especiales.",
  keywords: "tequeños, Orlando, eventos, mobile bar, comida venezolana, catering",
  openGraph: {
    title: "El Tequebar | Tequeños gourmet en Orlando",
    description: "Servicio de tequeños gourmet tipo mobile bar para eventos en Orlando",
    type: "website",
  },
}

export default async function HomePage() {
  const reviews = await getGoogleReviews()

  return (
    <main className="scroll-smooth">
      <HeroCarousel />
      <Catalog />
      <ReviewCarousel reviews={reviews} />
      <WhatsappFab />
    </main>
  )
}
