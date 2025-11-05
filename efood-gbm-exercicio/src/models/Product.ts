class Products {
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
  id: number
  to: string

  constructor(
    title: string,
    description: string,
    image: string,
    rating: string,
    infos: string[],
    id: number,
    to: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.rating = rating
    this.infos = infos
    this.to = to
  }
}

export default Products
