import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Contacts from '../Pages/Contacts'
import NotFound from '../Pages/NotFound'
import Navbar from '../Navbar'
import Home from '../Pages/Home'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
