import { useEffect, useState } from 'react'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'

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
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <ProductsList restaurantes={restaurantes} />
    </>
  )
}

export default Home
