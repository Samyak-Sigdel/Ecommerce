import React from 'react'
import './Footer.css'
import flogo from '../Assets/l.jpg';
import instagram from '../Assets/i.jpg'
import pininterest from '../Assets/p.jpg'
import whatsapp from '../Assets/R.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={flogo} alt="" />
            <p>SYK SHADES</p>
        </div>

     <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>

     {/* <div className="footer-social-icon">
         <div className="footer-icons-container">
            <img src={instagram} alt="" />
         </div>

         <div className="footer-icons-container">
            <img src={pininterest} alt="" />
         </div>

         <div className="footer-icons-container">
             <img src={whatsapp} alt="" />
         </div>
     </div> */}

<div className="footer-social-icon">
         <div className="footer-icons-container">
            <img src={instagram} alt="" />
            <img src={pininterest} alt="" />
             <img src={whatsapp} alt="" />
         </div>
     </div>


     <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved</p>
     </div>




    </div>
  )
}
