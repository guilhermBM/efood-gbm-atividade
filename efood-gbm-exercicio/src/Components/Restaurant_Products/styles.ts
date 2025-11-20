import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  margin-top: 56px;
`

export const Card = styled.div`
  background-color: ${cores.vermelho};
  max-width: 320px;
  min-height: 338px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ImageCard = styled.img`
  width: 304px;
  height: 168px;
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
  height: 90px; /* ajuste conforme necessário */
  overflow: hidden;
`

export const ButtonCard = styled.button`
  background-color: ${cores.bege};
  margin: 8px;
  width: 304px;
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  display: flex;
  position: relative;
  z-index: 1;
  max-width: 1024px;
  height: 344px;
  padding: 32px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div {
    margin-left: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin: 16px 0;
    }

    button {
      background-color: ${cores.bege};
      color: ${cores.vermelho};
      font-size: 14px;
      font-weight: bold;
      width: 218px;
      height: 24px;
      border: none;
    }
  }
`

export const Fechar = styled.img`
  width: 12px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`
