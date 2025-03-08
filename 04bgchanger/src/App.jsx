import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'

function App() {

  return (
    <>
      <div className="box flex gap-3 bg-gray-400 p-3 rounded-2xl" 
      style={{
        // here we can write inline css
      }}>
        <Buttons colorName = "RED" color = "red" Styling = "bg-red-700 rounded-xl"/>
        <Buttons colorName = "PURPLE" color = "purple" Styling = "bg-purple-700 rounded-xl" />
        <Buttons colorName = "GREEN" color = "green" Styling = "bg-green-700 rounded-xl"/>
        <Buttons colorName = "YELLOW" color = "yellow" Styling = "bg-yellow-700 rounded-xl"/>
        <Buttons colorName = "ORANGE" color = "orange" Styling = "bg-orange-700 rounded-xl"/>
        <Buttons colorName = "GREY" color = "grey" Styling = "bg-gray-700 rounded-xl"/>
      </div>
    </>
  )
}

export default App
