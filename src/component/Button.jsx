import React from 'react';
import {car} from '../assets'
import './style.css'


const Button = () => {
  return (
    <div>
      <button type="btn" className="btn btn-outline-danger bg-danger bran"><img src={car} alt=""className='bra' /><p className="cic">Buy Now</p> </button>
    </div>
  );
}

export default Button