import React from 'react'
import logo from "../assets/logo.svg"
import headerBg from "../assets/bg-header-desktop.png"


export default function Header() {
  return (
<div className='header' 
style={{width:"100%", 
height:"20%", 
backgroundImage:`url(${headerBg})`,
backgroundRepeat: "no-repeat",

display:"flex", 
justifyContent:"center",
alignItems:"center"
 }}>
  
<img src={logo} alt="logo" />
</div>
  
  );
}

