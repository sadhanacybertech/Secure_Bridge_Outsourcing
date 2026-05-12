import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import Home from './Home'
import Whatsapp from './Components/Whatsapp'

function App() {

  return (
          <>
               <Header/>
                <Whatsapp/>
               <Home/>
                 
                <Footer/>

          </>
  )
}

export default App
