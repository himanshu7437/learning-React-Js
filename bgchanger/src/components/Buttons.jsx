import React from 'react'

export default function Buttons({color, colorName, Styling}) {

    const bgchangerr = function(colors) {
        console.log("clicked")
        document.body.style.backgroundColor = colors;
      }

  return (
    <div className = {Styling} >
          <button onClick={() => bgchangerr(color)}>{colorName}</button>
    </div>
  )
}
