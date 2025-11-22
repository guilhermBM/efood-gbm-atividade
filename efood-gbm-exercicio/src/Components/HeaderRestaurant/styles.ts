import styled from 'styled-components'

import { ButtonLink } from '../Button/styles'
import { breakPoints, cores } from '../../styles'

export const BackImage = styled.div`
  width: 100%;
  height: 186px;
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 56px;

  ${ButtonLink} {
    background-color: transparent;
    color: ${cores.vermelho};
    font-size: 16px;
  }

  @media (max-width: ${breakPoints.desktop}) {
    max-width: 80%;
    justify-content: space-between;

    img {
      display: flex;
      justify-content: center;
    }
  }
`

export const Logo = styled.img`
  max-width: 126px;
  width: 100%;
`

export const ButtonCart = styled.span`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 320px;
  background-size: cover;
`

export const HeroDesc = styled.p`
  font-size: 32px;
  font-weight: 100;
  font-style: thin;
  color: ${cores.branca};
  padding-top: 26px;
`

export const HeroTitle = styled.h4`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branca};
  padding-top: 156px;
`
