import React from 'react'
import './Footer.css'
import footer_logo from "../Assets/loog.png"
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Trendyworld</p>
        </div>
        <ul className='footer-links'>
            <li>Company </li>
            <li>Products </li>
            <li>Our Office </li>
            <a href="tel:+1234567890"> Call +2348035204716</a>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
                <a href="https://whatsapp.com">Whatsapp</a>
            </div>

            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
                <a href="https://instagram.com">Instagram</a>
            </div>

            <div className="footer-icons-container">
              <a href="https://twitter.com/yourprofile">
               <FaTwitter size={30} color="#1DA1F2" />
               Twitter (X)
              </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://facebook.com/">
               <FaFacebook size={30} color="#1DA1F2" />
               Facebook
              </a>
              </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>
            Copyright @ 2024 - All Rights Reserved...       KING LOT ( FULL STACK DEV )
            </p>
        </div>
    </div>
  )
}

export default Footer
