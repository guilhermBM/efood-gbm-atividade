import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ScrollToTop from '../../Components/ScrollToTop'
import Header from '../../Components/HeaderRestaurant'
import ProductsList from '../../Components/Restaurant_P_List'
import { useGetRestaurantProductQuery } from '../../services/api'
import Cart from '../../Components/Cart'

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
  const { data: restaurante, isLoading } = useGetRestaurantProductQuery(
    id ?? ''
  )

  if (isLoading) return <div>Carregando...</div>
  if (!restaurante) return <div>Erro ao carregar restaurante</div>

  return (
    <>
      <ScrollToTop />
      <Header restaurante={restaurante} />
      <ProductsList produtos={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default Restaurant
