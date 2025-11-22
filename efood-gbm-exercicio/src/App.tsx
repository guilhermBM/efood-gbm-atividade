import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Footer from './Components/Footer'

import { GlobalCss } from './styles'

import Restaurant from './Pages/Restaurant'
import { store } from './Store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:slug/:id" element={<Restaurant />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
