import React from 'react'
import logo from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import instagram from "../assets/icon-instagram.svg"

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
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
          justifyContent: "space-between",
          gap: "2%",
          alignContent: "center",
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

      <div>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
}
