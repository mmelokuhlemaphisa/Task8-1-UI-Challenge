import React from 'react'
import logo from "../assets/logo.svg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#F5F6F8",
        marginTop: "5%",
      }}
    >
      <img src={logo} alt="" />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        //   justifyContent: "space-between",
          gap: "20%",
          width:"50%"
          
     
        
        }}
      >
        <div>
          <a href="#">FAQs</a>
          <br />
          <br /> <a href="#">Contact Us</a>
        </div>

        <div>
          <a href="#">Privacy Policy</a>
          <br /> <br /> <a href="#">Press Kit</a>
        </div>

        <div>
          <a href="#">Install Guide</a>
        </div>
      </div>

      <div className='socialLink'>
        <a href="#">
          <FaFacebook className="social-icon facebook" />
        </a>

        <a href="#">
          <FaTwitter className="social-icon twitter" />
        </a>

        <a href="#">
          <FaInstagram className="social-icon instagram" />
        </a>
      </div>
    </div>
  );
}
