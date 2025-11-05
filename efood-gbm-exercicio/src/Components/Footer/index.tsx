import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook-icon.svg'
import instagram from '../../assets/images/instagram-icon.svg'
import twiter from '../../assets/images/twitter-icon.svg'

import { Container, Links, Link, Description } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="Efood" />
      <div>
        <Links>
          <Link>
            <img src={facebook} alt="Facebook" />
          </Link>
          <Link>
            <img src={instagram} alt="Instagram" />
          </Link>
          <Link>
            <img src={twiter} alt="Twiter" />
          </Link>
        </Links>
      </div>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </div>
  </Container>
)

export default Footer
