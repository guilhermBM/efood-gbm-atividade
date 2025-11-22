import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
