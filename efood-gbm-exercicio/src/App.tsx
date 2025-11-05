import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './Pages/Home'
import LaDolce from './Pages/LaDolce'
import Footer from './Components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/LaDolceVita',
    element: <LaDolce />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
