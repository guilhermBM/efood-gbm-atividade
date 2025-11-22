import { useEffect, useState } from 'react'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (isLoading) return <div>Carregando...</div>
  if (!restaurantes) return <div>Não foi possível carregar restaurantes.</div>

  return (
    <>
      <ScrollToTop />
      <Header />
      <ProductsList restaurantes={restaurantes} />
    </>
  )
}

export default Home
