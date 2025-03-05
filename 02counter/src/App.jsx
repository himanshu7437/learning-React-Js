import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, iAmSetcounter] = useState(15)
  // let counter = 15


  const addvalue = () => {
    if(counter<20) {
      // ❌ The following lines won't increment by 3 because React batches similar state updates:
      // iAmSetcounter(counter + 1);
      // iAmSetcounter(counter + 1);
      // iAmSetcounter(counter + 1);

      // ✅ Correct way: Using the previous state ensures all updates are counted:
      iAmSetcounter(prevCounter => prevCounter + 1);
      iAmSetcounter(prevCounter => prevCounter + 1);
      iAmSetcounter(prevCounter => prevCounter + 1);
    }
  }

  const decreaseValue = () => {
    console.log("clicked", counter) // just to check counter on console
    // counter = counter - 1
    if(counter>0) {
      counter -= 1
    }
    iAmSetcounter(counter) // we can also do this.
  }

  return (
    <>
      <h1>Chai aur Code</h1>
      <p>It has a limit of 0 to 20.</p>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addvalue}
      >Add Value </button>
      <br />
      <button onClick={decreaseValue}
      >Decrease Value </button>
    </>
  )
}

export default App
