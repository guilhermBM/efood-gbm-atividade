import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/HeaderRestaurant'
import ProductsList from '../../Components/Restaurant_P_List'

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  tipo: string
  titulo: string
  id: number
  cardapio: Produto[]
}

function Restaurant() {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  if (!restaurante) return <div>Carregando...</div>

  return (
    <>
      <ScrollToTop />
      <Header restaurante={restaurante} />
      <ProductsList produtos={restaurante.cardapio} />
    </>
  )
}

export default Restaurant
