<<<<<<< HEAD
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
=======
import { GlobalCss } from './styles'
>>>>>>> parent of 98ad183 (bannerHero)

function App() {
  return (
    <>
      <GlobalCss />
<<<<<<< HEAD
      <RouterProvider router={rotas} />
      <Footer />
=======
      <div> Olá, mundo</div>
>>>>>>> parent of 98ad183 (bannerHero)
    </>
  )
}

export default App
