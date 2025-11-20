import RestaurantProducts from '../Restaurant_Products'

import { Container, List } from './styles'

type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Props = {
  produtos: Produto[]
}

const RestaurantProductsList = ({ produtos }: Props) => {
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {produtos.map((produto) => (
              <RestaurantProducts key={produto.id} produto={produto} />
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default RestaurantProductsList
