import React, { useState } from "react";
import { FAQDes, FAQDesTitle, FAQs, faqs } from "../Constant/AllWebsite";

const FAQCard = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", textAlign: "center" }}>
      <center>
        <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
          <p>{FAQs}</p>
        </div>
      </center>

      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>
        {FAQDesTitle}
      </h2>
      <p className="text-black dark:text-white" style={{ fontSize: "14px", marginBottom: "25px" }}>
        {FAQDes}
      </p>

      <div>
        {faqs.map((item, index) => (
          <div key={index} className="bg-[#f8f8fb] dark:bg-white" style={{ marginBottom: "10px", borderRadius: "10px", padding: "15px 20px", textAlign: "left", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }} onClick={() => toggleFAQ(index)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className="text-black" style={{ margin: 0, fontSize: "16px", fontWeight: "500" }}>
                {item.q}
              </p>
              <span className="text-black" style={{ fontSize: "20px", fontWeight: "bold" }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-black" style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5" }}>
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCard;
