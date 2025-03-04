import Chai from "./Chai"

function App() {

  const username = "Chai Aur Code"

  return (
    // fragment (<></>) 
    // keep the component capitalize 
    // {username} --> to use a variable
    
    <> 
    <h1>Chai aur React with | {username}</h1>
    <Chai/>
    </>
  )
}

export default App
