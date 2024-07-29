import React from 'react'
import './Offers.css'
import exclusive_image from  '../Assets/ppeee.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
           <h1>Exclusive Offers</h1>
           <h2 >Steez Offers for you </h2>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button> <h3> CHECK NOW </h3> </button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image } alt="" />
      </div>
    </div>
  )
}

export default Offers
