import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import Button from '../Button'

import apresentacao from '../../assets/images/apresentacao.svg'

import { open } from '../../Store/reducers/cart'

import {
  BackImage,
  ButtonCart,
  Container,
  HeroDesc,
  HeroImage,
  HeroTitle,
  Logo
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

type Restaurante = {
  titulo: string
  tipo: string
}

type Props = {
  restaurante: Restaurante
}

const Header = ({ restaurante }: Props) => {
  function capitalizeFirstLetter(texto: string) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <BackImage style={{ backgroundImage: `url(${fundo})` }}>
        <Container>
          <Button type="link" to="/" title="Restaurantes">
            Restaurantes
          </Button>
          <Logo src={logo} alt="Efood" />
          <ButtonCart onClick={openCart}>
            {items.length} produto(s)🛒
          </ButtonCart>
        </Container>
      </BackImage>
      <HeroImage style={{ backgroundImage: `url(${apresentacao})` }}>
        <div className="container">
          <HeroDesc>{capitalizeFirstLetter(restaurante.tipo)}</HeroDesc>
          <HeroTitle>{restaurante.titulo}</HeroTitle>
        </div>
      </HeroImage>
    </>
  )
}

export default Header
