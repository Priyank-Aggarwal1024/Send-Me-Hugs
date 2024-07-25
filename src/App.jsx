import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, FaqPage, ForgotPassword, Home, Login, Signin, Help, GetInTouch, FundraisingForm, PhoneVerification } from './page'
import { Admin, Dasboard, FundraiserIten, FundraisingSignIn, Notifications, Profile, Statistics, Transfers } from './components'

function App() {
  const [deletePopup, setDeletePopup] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

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
            <Route path='/' element={<Admin navOpen={navOpen} setNavOpen={setNavOpen} />}>
              <Route path='dashboard' element={<Dasboard navOpen={navOpen} setNavOpen={setNavOpen} />} />
              <Route path='dashboard/:slug' element={<>
                <Dasboard deletePopup={deletePopup} setDeletePopup={setDeletePopup} navOpen={navOpen} setNavOpen={setNavOpen} >
                  <FundraiserIten deletePopup={deletePopup} setDeletePopup={setDeletePopup} />
                </Dasboard>
              </>} />
              <Route path="notifications" element={<Notifications navOpen={navOpen} setNavOpen={setNavOpen} />} />
              <Route path="transfers" element={<Transfers navOpen={navOpen} setNavOpen={setNavOpen} />} />
              <Route path="profile" element={<Profile navOpen={navOpen} setNavOpen={setNavOpen} />} />
              <Route path="statistics" element={<Statistics navOpen={navOpen} setNavOpen={setNavOpen} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
