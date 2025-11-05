import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  margin-top: 56px;
`

export const Card = styled.div`
  background-color: ${cores.vermelho};
  max-width: 320px;
  height: 338px;
  width: 100%;
`
export const ImageCard = styled.img`
  max-width: 304px;
  margin: 8px;
`

export const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.bege};
  margin-left: 8px;
`

export const ProductDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.bege};
  max-width: 304px;
  margin-top: 8px;
  margin-left: 8px;
`

export const ButtonCard = styled.button`
  background-color: ${cores.bege};
  margin: 8px;
  width: 304px;
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  border: none;
`
