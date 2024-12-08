import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import HomeYV from './components/HomeYV/HomeYV'
import Home3 from './components/Home3/Home3'
import Home4 from './components/Home4/Home4'
import Home5 from './components/Home5/Home5'
import Home6 from './components/Home6/Home6'
import Home7 from './components/Home7/Home7'
import Home8 from './components/Home8/Home8'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
      </Routes>
      <Home></Home>
      <HomeYV></HomeYV>
      <Home3></Home3>
      {/* <Home4></Home4> */}
      {/* <Home5></Home5> */}
      {/* <Home6></Home6> */}
      {/* <Home7></Home7> */}
      {/* <Home8></Home8> */}
      {/* <Footer></Footer> */}

      </BrowserRouter>
  )
}

export default App
