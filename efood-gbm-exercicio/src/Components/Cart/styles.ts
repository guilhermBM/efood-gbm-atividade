import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonProduct } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonProduct} {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: none;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.bege};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: black;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
