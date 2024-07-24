import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, FaqPage, ForgotPassword, Home, Login, Signin, Help, GetInTouch, FundraisingForm, PhoneVerification } from './page'
import { Admin, Dasboard, FundraisingSignIn, Notifications, Profile, Statistics, Transfers } from './components'

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
            <Route path="/phone-verification" element={<PhoneVerification />} />
            <Route path='/' element={<Admin />}>
              <Route path='dashboard' element={<Dasboard />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="transfers" element={<Transfers />} />
              <Route path="profile" element={<Profile />} />
              <Route path="statistics" element={<Statistics />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
