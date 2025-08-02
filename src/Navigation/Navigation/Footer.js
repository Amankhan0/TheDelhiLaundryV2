import React from "react";
import { MainLogo } from "../../Constant/AllWebsite";
import { Mail, Phone } from "lucide-react";

const Footer = () => {

    var theme = localStorage.getItem('theme')

    return (
        <div>
            <div className="md:grid lg:grid md:grid-cols-12 lg:grid-cols-12 gap-10 p-20">
                <div className="col-span-6">
                    <img className={'w-[150px]'} src={theme === 'light' ? MainLogo : MainLogo} />
                    <p className="text-lg mt-5">Fast, reliable, and hassle-free laundry <br />services tailored for your convenience.</p>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Explore</p>
                    <p className="text-lg mt-3">Home</p>
                    <p className="text-lg mt-3">Location</p>
                    <p className="text-lg mt-3">Services</p>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Company Info</p>
                    <p className="text-lg mt-3">About Us</p>
                    <p className="text-lg mt-3">Contact Us</p>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Get In Touch</p>
                    <p className="text-lg mt-3"><Phone /></p>
                    <p className="text-lg mt-3"><Mail /></p>
                </div>
            </div>
            <div className="border-t border-gray-200 mx-10 p-5 -mt-10 text-center">
                <p>Build by Framer Geeks, a part of Saeculum Solutions.</p>
            </div>
        </div>
    )
}

export default Footer;