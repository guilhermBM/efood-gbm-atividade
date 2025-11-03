import ProductsList from '../../Components/ProductsList'

import hiokisushi from '../../assets/images/hiokisushi.svg'
import Products from '../../models/Product'

const listaProdutos: Products[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    image: hiokisushi,
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  }
]

const Restaurants = () => (
  <>
    <ProductsList produtos={listaProdutos} />
  </>
)

export default Restaurants
