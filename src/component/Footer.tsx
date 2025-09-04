import React from 'react'
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        backgroundColor: "#F5F6F8", marginTop:"5%",
      }}
    >
      <img src={logo} alt="" />
      <div>
        
      </div>
    </div>
  );
}
