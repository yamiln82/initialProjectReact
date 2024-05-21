import React, { useState } from 'react'

export default function Component() {
  

  const [text, setText] = useState () 
  const [updated, setUpdated] = useState () 

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnclick = () => {
    setUpdated(text)
  }

  
  
  return (
    <div>
      <input type = "text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnclick}>Actualizar </button>
     <p>Texto input: {text}</p> 
     <p>Texto Actualizado: {updated}</p>
     
      
      </div>
  )
}
