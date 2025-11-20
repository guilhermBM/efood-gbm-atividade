import styled from 'styled-components'

import { cores } from '../../styles'

export const CardProduto = styled.div`
  background-color: ${cores.branca};
  max-width: 472px;
  width: 100%;
  margin-bottom: 48px;
  padding-bottom: 16px;
  position: relative;

  a {
    margin-left: 8px;
  }

  > img {
    display: block;
    width: 100%;
    height: 218px;
    object-fit: cover;
  }
`

export const DivTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px;
`
export const RatingStar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export const Star = styled.img`
  max-width: 21px;
  width: 100%;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: 16px;
  right: 16px;
`
export const Border = styled.div`
  border: 1px solid ${cores.vermelho};
  border-top: none;
  width: 472px;
  height: 180px;
`
