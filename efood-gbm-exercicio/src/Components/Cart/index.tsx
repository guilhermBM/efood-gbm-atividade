import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../Store'
import { close, remove } from '../../Store/reducers/cart'

import Button from '../Button'

import { formataPreco } from '../Restaurant_Products'

import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span> {formataPreco(getTotalPrice())} </span>
        </Prices>
        <Button
          title="Clique aqui para seguir com a entrega"
          type="button"
          to={''}
        >
          Continuar para entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
