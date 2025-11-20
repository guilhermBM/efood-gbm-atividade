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
  infos: string[]
  rating: number
  to: string
}

const RestarurantList = ({
  description,
  infos,
  image,
  rating,
  title,
  to
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 272) {
      return descricao.slice(0, 269) + '...'
    }
    return descricao
  }

  return (
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
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          type="link"
          to={to}
          title="Clique aqui para saber mais sobre o conteúdo"
        >
          Saiba Mais
        </Button>
      </Border>
    </CardProduto>
  )
}

export default RestarurantList
