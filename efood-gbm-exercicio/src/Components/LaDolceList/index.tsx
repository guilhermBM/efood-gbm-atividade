import LaDolceProduct from '../LaDolceProduct'
import ProductLaDolce from '../../models/ProductLaDolce'

import { Container, List } from './styles'

export type Props = {
  produtos: ProductLaDolce[]
}

const ProductsListLaDolce = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <LaDolceProduct
            key={produto.id}
            title={produto.title}
            description={produto.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListLaDolce
