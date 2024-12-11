import React from 'react'
// import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './pages/Product/Product.jsx'
import Resources from './pages/Resources/Resources.jsx'
import Pricing from './pages/Pricing/Pricing.jsx'
import Customers from './pages/Customers/Customers'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage.jsx'
import Knowmore from './pages/Knowmore/Knowmore.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <HomePage />
      </div>,
  },
  {
    path: "/Product",
    element:
      <div>
        <Navbar />
        <Product />
      </div>,
  },
  {
    path: "/Customers",
    element:
      <div>
        <Navbar />
        <Customers />
      </div>,
  },
  {
    path: "/Pricing",
    element:
      <div>
        <Navbar />
        <Pricing />
      </div>,
  },
  {
    path: "/Resources",
    element:
      <div>
        <Navbar />
        <Resources />
      </div>,
  },
  {
    path: "/Login",
    element:
      <div>
        <Navbar />
        <Login />
      </div>,
  },
  {
    path: "/Knowmore",
    element:
      <div>
        <Navbar />
        <Knowmore />
      </div>,
  },

]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
