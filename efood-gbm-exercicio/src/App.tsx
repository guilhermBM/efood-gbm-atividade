import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home'
import LaDolce from './Pages/LaDolce'
import Footer from './Components/Footer'

import { GlobalCss } from './styles'

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
