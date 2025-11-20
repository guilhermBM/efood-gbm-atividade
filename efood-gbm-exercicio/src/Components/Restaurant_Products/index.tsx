import { useState } from 'react'

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

type Produto = {
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

const RestaurantProducts = ({ produto }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 127) + '...'
    }
    return descricao
  }

  return (
    <>
      <Container>
        <div>
          <Card>
            <ImageCard src={produto.foto} alt={produto.nome} />
            <ProductTitle>{produto.nome}</ProductTitle>
            <ProductDesc>{getDescricao(produto.descricao)}</ProductDesc>
            <ButtonCard onClick={() => setModalEstaAberto(true)}>
              Mais detalhes
            </ButtonCard>
          </Card>
        </div>
      </Container>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={produto.foto} />
          <div>
            <Fechar
              src={close}
              onClick={() => {
                setModalEstaAberto(false)
              }}
            />
            <div>
              <h4>{produto.nome}</h4>
              <p>{produto.descricao}</p>
              <p>
                <b>Serve:</b> {produto.porcao}
              </p>
              <button>
                Adicionar ao carrinho - {formataPreco(produto.preco)}
              </button>
            </div>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default RestaurantProducts
