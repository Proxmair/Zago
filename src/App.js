import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header.jsx'
import Home from './component/Home.jsx'
import Footer from './component/Footer.jsx'

const App = () => {

  return (
    <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer/>
    </Router>
  )
}

export default App