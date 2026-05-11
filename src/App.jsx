import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'

function App() {

  return (
          <>
               <Header/>
                
                <h1 className='text-center'>Welcome to Our App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore, velit eum laboriosam, minima pariatur accusamus tempore odit illum unde aliquid recusandae hic odio at enim sed. Ex, fuga dolore?</p>

                <Footer/>

          </>
  )
}

export default App
