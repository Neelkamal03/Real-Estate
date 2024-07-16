import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left-side */}
            <div className="flexColStart f-left">
                <img src="./assests/logo.jpg" alt="" width={120}/>
                <span className="secondaryText">
                    Our vision is to help you to get your Dream Home
                </span>
            </div>
           {/* right-side  */}
           <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className='secondaryText'>Shimla, Himachal Pradesh</span>
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>About Us</span>
                <span>Products</span>
            </div>
           </div>

        </div>
    </section>
  )
}
