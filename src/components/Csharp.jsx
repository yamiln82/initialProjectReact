import React from 'react'
import csharp from '../image/csharp.jpg'

const Csharp = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
    <img src={csharp} alt="lenguaje programacion csharp" className="image"/>  
    </div>
  )
}

export default Csharp
