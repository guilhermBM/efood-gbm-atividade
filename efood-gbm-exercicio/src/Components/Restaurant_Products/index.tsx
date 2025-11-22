import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../../Store/reducers/cart'

import close from '../../assets/images/fechar.png'

import {
  Card,
  ImageCard,
  Container,
  ProductTitle,
  ProductDesc,
  ButtonCard,
  Modal,
  ModalContent,
  Fechar
} from './styles'

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  produto: Produto
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
// função que formata o preço do produto

const RestaurantProducts = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
  }

  const addToCartAndClose = () => {
    addToCart()
    fecharModalAnimado()
  }
  // função adiciona ao carrinho ^

  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [animando, setAnimando] = useState(false)
  const [modalFechado, setModalFechado] = useState(false)

  const abrirModalAnimado = () => {
    setModalEstaAberto(true)
    setTimeout(() => setAnimando(true), 10)
  }

  const fecharModalAnimado = () => {
    setAnimando(false)
    setModalFechado(true)
    setTimeout(() => {
      setModalEstaAberto(false)
      setModalFechado(false)
    }, 300)
  }
  // função anima o fechar e abrir do modal ^

  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 127) + '...'
    }
    return descricao
  }
  // função que limita a descrição do produto

  return (
    <>
      <Container>
        <div>
          <Card>
            <ImageCard
              src={produto.foto}
              alt={produto.nome}
              onClick={abrirModalAnimado}
            />
            <ProductTitle>{produto.nome}</ProductTitle>
            <ProductDesc>{getDescricao(produto.descricao)}</ProductDesc>
            <ButtonCard onClick={abrirModalAnimado}>Mais detalhes</ButtonCard>
          </Card>
        </div>
      </Container>
      <Modal
        className={`${modalEstaAberto ? 'visivel' : ''} ${animando ? 'animando' : ''} ${modalFechado ? 'fechando' : ''}`}
      >
        <ModalContent className="container">
          <img src={produto.foto} />
          <div>
            <Fechar src={close} onClick={fecharModalAnimado} />
            <div>
              <h4>{produto.nome}</h4>
              <p>{produto.descricao}</p>
              <p>
                <b>Serve:</b> {produto.porcao}
              </p>
              <button onClick={addToCartAndClose}>
                Adicionar ao carrinho - {formataPreco(produto.preco)}
              </button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={fecharModalAnimado}></div>
      </Modal>
    </>
  )
}

export default RestaurantProducts
