import React from "react";
import { offerLatterPointsArr, redirectToWhatsapp, specialOfferDescription, specialOfferPara, specialOfferTitle, specialOfferWhy } from "../Constant/AllWebsite";

const OfferCard = () => {
  return (
    <div style={{ display: "flex",flexWrap:'wrap', alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to right, #e6f8f7, #ffffff)", borderRadius: "15px", padding: "50px", margin: "20px auto", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      {/* Left Content */}
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "10px", lineHeight: "1.4" }}>
          <span style={{ color: "#1db5a3", fontWeight: 'bold' }}>{specialOfferTitle}</span> <br />
          <span style={{ fontWeight: "bold", fontSize: '20px', color: 'black' }}>{specialOfferPara}</span>
        </h3>

        <p style={{ fontSize: "18px", color: "#333", marginBottom: "12px" }}>
          {
            specialOfferDescription
          }
        </p>

        <p style={{ fontSize: "18px", color: "black", fontWeight: 'bold', marginBottom: "12px" }}>
          {
            specialOfferWhy
          }
        </p>


        {
          offerLatterPointsArr?.map((ele, i) => {
            return (
              <p style={{ fontSize: "18px", color: "#555", marginBottom: "5px" }}>
                ✅ {ele?.title} {ele?.description}
              </p>
            )
          })
        }

        <button onClick={()=>redirectToWhatsapp()} style={{ width:'max-content',marginTop: "15px", padding: "10px 18px", backgroundColor: "#1db5a3", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
          % Claim Your Discount
        </button>
      </div>

      {/* Right Image */}
      <div style={{ flexShrink: 0 }}>
        <img src="https://framerusercontent.com/images/o4RqKEeAn3teK6uChaRpnDBZkso.png?scale-down-to=512" alt="Laundry" style={{ borderRadius: "10px",width:window.innerWidth > 500?'':'200px',marginTop:"20px" }} />
      </div>
    </div>
  );
};

export default OfferCard;
