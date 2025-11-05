import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import Button from '../Button'

import apresentacao from '../../assets/images/apresentacao.svg'
import {
  BackImage,
  Carrinho,
  Container,
  HeroDesc,
  HeroImage,
  HeroTitle,
  Logo
} from './styles'

const Header = () => (
  <div>
    <BackImage style={{ backgroundImage: `url(${fundo})` }}>
      <Container>
        <Button type="link" to="/" title="Restaurantes">
          Restaurantes
        </Button>
        <Logo src={logo} alt="Efood" />
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Container>
    </BackImage>
    <HeroImage style={{ backgroundImage: `url(${apresentacao})` }}>
      <div className="container">
        <HeroDesc>Italiana</HeroDesc>
        <HeroTitle>La Dolce Vita Trattoria</HeroTitle>
      </div>
    </HeroImage>
  </div>
)

export default Header
