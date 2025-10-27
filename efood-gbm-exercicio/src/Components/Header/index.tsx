import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import { BackImage, HeaderText, Logo } from './styles'

const Header = () => (
  <BackImage style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} alt="Efood" />
    <HeaderText>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderText>
  </BackImage>
)

export default Header
