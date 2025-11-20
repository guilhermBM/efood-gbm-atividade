import { Restaurantes } from '../../Pages/Home'
import RestaurantList from '../Restaurant_List'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => {
  function slugify(str: string) {
    return str
      .normalize('NFD') // Decompõe os caracteres Unicode (separa a letra do acento)
      .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos (acentos)
      .toLowerCase()
      .replace(/ /g, '-') // Substitui espaços por hífens
      .replace(/[^\w-]+/g, '') // Remove caracteres não alfanuméricos e não hífens
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes && restaurantes.length > 0 ? (
            restaurantes.map((restaurante) => (
              <RestaurantList
                key={restaurante.id}
                description={restaurante.descricao}
                image={restaurante.capa}
                rating={restaurante.avaliacao}
                title={restaurante.titulo}
                to={`restaurante/${slugify(restaurante.titulo)}/${restaurante.id}`}
                infos={[
                  restaurante.destacado ? 'Destaque da semana' : '',
                  restaurante.tipo
                ].filter(Boolean)} // remove vazios
              />
            ))
          ) : (
            <p>Carregando restaurantes...</p>
          )}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
