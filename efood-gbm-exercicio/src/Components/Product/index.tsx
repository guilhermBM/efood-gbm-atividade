import Button from '../Button'

import estrela from '../../assets/images/estrelaNota.svg'
import {
  CardProduto,
  Descricao,
  DivTitulo,
  Rating,
  RatingStar,
  Star,
  Infos,
  Border
} from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
}

const Product = ({ title, description, image, infos, rating }: Props) => (
  <CardProduto>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Border>
      <DivTitulo>
        <h3>{title}</h3>
        <RatingStar>
          <Rating>{rating}</Rating>
          <Star src={estrela} alt="estrela dourada" />
        </RatingStar>
      </DivTitulo>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="/restaurants"
        title="Clique aqui para saber mais sobre o conteúdo"
      >
        Saiba Mais
      </Button>
    </Border>
  </CardProduto>
)

export default Product
