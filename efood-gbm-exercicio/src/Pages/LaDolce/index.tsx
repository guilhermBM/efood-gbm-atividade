import ScrollToTop from '../../Components/ScrollToTop'
import HeaderPerfil from '../../Components/HeaderPerfil'
import ProductsListLaDolce from '../../Components/LaDolceList'
import ProductLaDolce from '../../models/ProductLaDolce'

const listaProdutos: ProductLaDolce[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita'
  }
]

const LaDolce = () => (
  <>
    <ScrollToTop />
    <HeaderPerfil />
    <ProductsListLaDolce produtos={listaProdutos} />
  </>
)

export default LaDolce
