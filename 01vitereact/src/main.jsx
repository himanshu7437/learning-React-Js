import { StrictMode } from 'react'
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* using that function */}
    <MyApp /> 
  </StrictMode>,
)
