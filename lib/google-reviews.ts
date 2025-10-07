import type { Review } from "./types" // Assuming Review type is defined in a separate file

export async function getGoogleReviews(): Promise<Review[]> {
  // Mock data for demonstration - replace with actual Google Places API call
  const mockReviews: Review[] = [
    {
      id: "1",
      author_name: "María González",
      rating: 5,
      relative_time_description: "hace 2 semanas",
      text: "Los tequeños más deliciosos de Orlando! Perfectos para mi fiesta de cumpleaños. El servicio fue excelente y llegaron súper frescos.",
      time: Date.now() - 1209600000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      author_name: "Carlos Rodríguez",
      rating: 5,
      relative_time_description: "hace 1 mes",
      text: "Increíble calidad y sabor auténtico venezolano. Los recomiendo 100% para cualquier evento. El Tequebar nunca decepciona.",
      time: Date.now() - 2592000000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      author_name: "Ana Martínez",
      rating: 4,
      relative_time_description: "hace 3 semanas",
      text: "Muy buenos tequeños, llegaron calientes y el queso estaba perfecto. Definitivamente los volveré a pedir para mi próximo evento.",
      time: Date.now() - 1814400000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      author_name: "Luis Fernández",
      rating: 5,
      relative_time_description: "hace 1 semana",
      text: "El mejor servicio de tequeños en Orlando. Puntuales, deliciosos y a buen precio. Los chiaqueños son mi favorito!",
      time: Date.now() - 604800000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      author_name: "Isabella Torres",
      rating: 5,
      relative_time_description: "hace 2 días",
      text: "Excelente para eventos corporativos. Todos mis colegas quedaron encantados con el sabor y la presentación.",
      time: Date.now() - 172800000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      author_name: "Roberto Silva",
      rating: 4,
      relative_time_description: "hace 1 mes",
      text: "Muy recomendados! La variedad de sabores es increíble y el servicio al cliente es de primera. Volveré a ordenar pronto.",
      time: Date.now() - 2419200000,
      profile_photo_url: "/placeholder.svg?height=40&width=40",
    },
  ]

  return mockReviews.filter((review) => review.rating >= 4).slice(0, 6)
}
