import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
export default function Header() {
  const [menuOpened, setMenuOpened]=useState(false);

  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <=768){
     
      return {right:(!menuOpened)? "-100%":'10%'}
    }
    return {};
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./assests/mainlogo.jpg" alt="logo" width={100} />
        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>Contact</button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened(!menuOpened)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
  )
}
