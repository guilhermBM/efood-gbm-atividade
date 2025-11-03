import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;
`
export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  margin-bottom: 40px;
`
