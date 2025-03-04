import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// create a function
function MyApp() {
  return(

    <div>
      <h1>CUSTOM APP!</h1>
    </div>
  )
}

// our custom reactElement --> it will not work because the react is expecting some specific properties that we dont know.
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google.'
// }

// secondElement 
const secondElement = (
  <a href="https://google.com">Visit google</a>
)

// a global variable --> used in reactElement
const newElement = "Chai aur Code"

// create using react create element
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  newElement
)

createRoot(document.getElementById('root')).render(
  
  reactElement

)
