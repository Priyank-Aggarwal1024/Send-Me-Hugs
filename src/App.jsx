import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, FaqPage, ForgotPassword, Home, Login, Signin, Help } from './page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signin />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
