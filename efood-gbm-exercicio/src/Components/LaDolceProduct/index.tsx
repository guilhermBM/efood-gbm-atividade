import pizza from '../../assets/images/pizza.svg'

import {
  Card,
  ImageCard,
  Container,
  ProductTitle,
  ProductDesc,
  ButtonCard
} from './styles'

type Props = {
  title: string
  description: string
}

const LaDolceProduct = ({ title, description }: Props) => (
  <Container>
    <div className="container">
      <Card>
        <ImageCard src={pizza} alt="" />
        <ProductTitle>{title}</ProductTitle>
        <ProductDesc>{description}</ProductDesc>
        <ButtonCard>Adicionar ao carrinho</ButtonCard>
      </Card>
    </div>
  </Container>
)

export default LaDolceProduct
