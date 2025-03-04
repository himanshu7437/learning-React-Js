import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, iAmSetcounter] = useState(15)
  // let counter = 15


  const addvalue = () => {
    counter = counter + 1
    iAmSetcounter(counter)
  }

  const decreaseValue = () => {
    console.log("clicked", counter) // just to check counter on console
    // counter = counter - 1
    iAmSetcounter(counter - 1) // we can also do this.
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}
      >Add Value </button>
      <br />
      <br />
      <button onClick={decreaseValue}
      >Decrease Value </button>
    </>
  )
}

export default App
