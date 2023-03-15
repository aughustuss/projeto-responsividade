import React from 'react'
import './App.css'
import { Route, Routes, Router } from 'react-router-dom'
import {Home} from './pages/home'
import {Navbar} from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} ></Route>
      </Routes>
    </>

  )
}

export default App
