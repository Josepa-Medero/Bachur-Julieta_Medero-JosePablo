import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Detail from './Pages/Detail'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Navbar from './Complements/Navbar'
import Footer from './Complements/Footer'
import { useGlobal } from './Context/Context'

function App() {
  const {state} = useGlobal();
  const {theme} = state;
  const cambioTema = theme ? 'light' : 'dark';

  return (
    <div className= {cambioTema}>
    <Navbar/>
     <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/detail/:id' element ={<Detail/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/favs' element ={<Favs/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
