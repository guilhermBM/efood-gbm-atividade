import Products from '../../models/Product'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  produtos: Products[]
}

const ProductsList = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            description={produto.description}
            image={produto.image}
            infos={produto.infos}
            rating={produto.rating}
            title={produto.title}
            to={produto.to}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
