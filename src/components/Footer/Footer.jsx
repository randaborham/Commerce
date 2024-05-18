import React from "react";
import img1 from "../../assets/American-Express-Logo-PNG-Image.webp";
import img2 from "../../assets/580b57fcd9996e24bc43c530.webp";
import img3 from "../../assets/MasterCard_logo.webp";
import img4 from "../../assets/Amazon-Pay-logo.svg";
import img5 from "../../assets/App_Store_(iOS)-Badge-Logo.wine.svg";
import img6 from "../../assets/google-play-badge.webp";
export default function Footer() {
  return (
    <div className="p-5" style={{ backgroundColor: " #F8F9FA" }}>
      <h2>Get The FreshCart app</h2>
      <p>we will send you a link, open it on your phone to download the app</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mb-3">
            <input className="form-control" placeholder="Email..."></input>
          </div>
          <div className="col-lg-3">
            <button className="btn bg-main w-100 text-white">
              Share App Link
            </button>
          </div>
        </div>
      </div>
      <hr className="w-100" style={{ opacity: ".08" }}></hr>
    </div>
  );
}
