import React from "react";
import { AboutDescription, AboutPageImage1, AboutPageImage2, AboutPageImage3, Contact, ContactDes, ContactTitle, HomePageText38, HomePageText39, HomePageText40, HomePageText8 } from "../../Constant/AllWebsite";
import HowItWork from "../../Component/HowItWork";
import OurBenifits from "../../Component/OurBenifits";
import OurTestimonial from "../../Component/OurTestimonial";
import { Phone } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="p-10 mt-10">
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{Contact}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className="text-4xl font-bold text-mainColorLightBlue">{ContactTitle}</p>
                </div>
                <div>
                </div>
            </center>
            <center>
                <div className="m-10 w-1/2 text-center">
                    <p className="text-lg text-center">{ContactDes}</p>
                </div>
            </center>
            <div>
                {/* Keyframes define करने के लिए */}
                <style>
                    {`@keyframes gradientAnimation {0% { background-position: 0% 50%; }50% { background-position: 100% 50%; }100% { background-position: 0% 50%; }}`}
                </style>

                {/* Card */}
                <div style={{ background: "linear-gradient(270deg, #e6f8f7, #ffffff, #d4f1ef)", backgroundSize: "400% 400%", animation: "gradientAnimation 3s ease infinite", maxWidth: "500px", margin: "20px auto", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", fontFamily: "sans-serif" }}>

                    {/* Phone */}
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "18px", marginRight: "10px" }}>📞</span>
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
                            <strong>Phone:</strong> +91 70110 98300
                        </p>
                    </div>

                    {/* Website */}
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "18px", marginRight: "10px" }}>🌐</span>
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
                            <strong>Website:</strong>{" "}
                            <a href="https://thedelhilaundry.com" style={{ color: "#1db5a3", textDecoration: "none" }}>
                                thedelhilaundry.com
                            </a>
                        </p>
                    </div>

                    {/* Service Area */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ fontSize: "18px", marginRight: "10px" }}>📍</span>
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
                            <strong>Service Area:</strong> Across Delhi with Free Pickup & Delivery
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:m-20 lg:m-20">
                    <div>
                        <img className="rounded-xl" src={AboutPageImage1} />
                    </div>
                    <div>
                        <div>
                            <img className="rounded-xl" src={AboutPageImage2} />
                        </div>
                        <div className="mt-6">
                            <img className="rounded-xl" src={AboutPageImage3} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Fourth page  */}
            <div className="m-10 mt-40">
                <HowItWork />
            </div>
            {/* Home fifth page  */}
            <div className="m-10 mt-40">
                <OurBenifits />
            </div>
            {/* Home sixth page  */}
            <div className="m-10 mt-40">
                <OurTestimonial />
            </div>
        </div>
    )
}

export default ContactUs;