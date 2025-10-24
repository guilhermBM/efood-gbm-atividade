import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  vermelho: '#E66767',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${cores.branca}
  }
`
