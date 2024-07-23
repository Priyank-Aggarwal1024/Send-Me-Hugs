import React, { useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { About, FaqPage, ForgotPassword, Home, Login, Signin, Help, GetInTouch, FundraisingForm } from './page'
import { FundraisingSignIn } from './components'

function App() {
  return (
    <>
      <div className="app overflow-x-hidden overflow-y-auto h-[100vh] scroll-smooth">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signin />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/help' element={<Help />} />
            <Route path='/get-in-touch' element={<GetInTouch />} />
            <Route path='/fundraising' element={<FundraisingForm />} />
            <Route path='/fundraising/signin' element={<FundraisingSignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
