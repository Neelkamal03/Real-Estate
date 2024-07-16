import React from 'react'
import "./Contact.css"
export default function Contact() {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left-side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>
                        Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit.
                        Nulla quaerat animi volun 
                        consectetur adipisicing elit.
                        consectetur adipisicing elit.
                        Nulla quaerat animi volun 
                        consectetur adipisicing elit.
                        consectetur adipisicing elit.</span>
                </div>
                {/* right-side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./assests/main4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
