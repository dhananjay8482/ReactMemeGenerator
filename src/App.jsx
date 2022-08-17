import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'


function App() {

  return (
    <header>
      <Header />
      <Meme />
    </header>
  )
}

export default App
