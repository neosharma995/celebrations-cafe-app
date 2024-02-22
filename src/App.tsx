 

import '/src/css/App.scss'
import Footer from './layouts/footer/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
 
 

function App() {
 

  return (
    <>
     
      <RouterProvider router={router}/>
      <Footer/>
       </>
    
  )
}

export default App
