import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/cards'

function App() {

  let myObj = {
    username: "Himanshu",
    age: "21",
  }

  return (
    
    <>
    <h1 className='bg-purple-500 text-black p-4 rounded-xl mb-4'>hello world</h1>
    <div className="cards flex gap-6">
      <Cards username = "Chai aur Code" btnText = "Visit me" />
      <Cards username = "Himanshu Sharma" />
    </div>
    </>
  )
}

export default App
