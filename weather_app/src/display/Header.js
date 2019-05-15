import React from 'react';
import './header.css';

const Header = (props)=>{
  return(
    <span className="heading">{props.heading}</span>
  )
}
export default Header;
