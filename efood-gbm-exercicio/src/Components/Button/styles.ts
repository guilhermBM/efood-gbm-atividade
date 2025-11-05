import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonProduct = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  text-decoration: none;
`
