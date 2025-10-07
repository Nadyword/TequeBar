export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageSrc: string
  units: number
}

export interface Review {
  id: string
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}
