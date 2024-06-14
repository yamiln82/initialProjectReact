import React from 'react'
import {Link} from "react-router-dom";
import Csharp from './Csharp';
import Flutter from './Flutter';
import Java from './Java';
import Php from './Php';
import JavaScript from './JavaScript';
import Pyton from './Pyton';
import Reac from './Reac';
import Salud from './Salud';
import Typescript from './Typescript';



const Navigation = () => {
  return (
    <div className="container mt-4 father">

      <Link to= "/csharp" className="links">
      <figure className="image-size">
        <Csharp/>
        <figcaption>csharp</figcaption>
      </figure>
      </Link  >

      <Link to= "/flutter"  className="links">
      <figure className="image-size" >
        <Flutter/>
        <figcaption>flutter</figcaption>
      </figure>
      </Link>

      <Link to= "/java" className="links">
      <figure className="image-size">
        <Java/>
        <figcaption>java</figcaption>
      </figure>
      </Link> 
      
       <Link to= "/javascript" className="links">
      <figure className="image-size">
        <JavaScript/>
        <figcaption>javascript</figcaption>
      </figure>
      </Link>

      <Link to= "/php" className="links">
      <figure className="image-size">
        <Php/>
        <figcaption>php</figcaption>
      </figure>
      </Link>

      <Link to= "/phyton" className="links">
      <figure className="image-size">
        <Pyton/>
        <figcaption>phyton</figcaption>
      </figure>
      </Link>

      
      <Link to= "/react" className="links">
      <figure className="image-size">
        <Reac/>
        <figcaption>react</figcaption>
      </figure>
      </Link>

      <Link to= "/salud" className="links">
      <figure className="image-size">
        <Salud/>
        <figcaption>salud</figcaption>
      </figure>
      </Link>

      <Link to= "/typescript" className="links">
      <figure className="image-size">
        <Typescript/>
        <figcaption>typescript</figcaption>
      </figure>
      </Link>


    </div>
  )
}

export default Navigation
