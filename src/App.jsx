
import HomeScreen from './screens/HomeScreen'
import './app.css'
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom'
import CartScreen from './screens/CartScreen'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <HomeScreen/>
  },
  {
    path: "/cart",
    element: <CartScreen/>
  }
])

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    

    </div>
  )
}

export default App
