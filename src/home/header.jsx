import React from 'react'
import "./header.css";
import featch from "../assets/images/featched-img.jpg";
const Header = () => {
  return (
    <div className='main-featched'>
        {/* <img src={featch} alt=" This is featched images" /> */}
      <div className='image-container'>

      <h1>
        Technotrive Electronics
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam non culpa ipsam dicta dolorum ratione, eligendi perferendis.
      </p>
     <div className='btn-div'>
        
      <button className='btn-1'>Contact Us</button>
      <button className='btn-2'>Hire Us Now</button>

     </div>

      {/* </div> */}
      </div>

    </div>
  )
}

export default Header;
