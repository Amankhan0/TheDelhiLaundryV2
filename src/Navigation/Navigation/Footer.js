import React from "react";
import logo from "../../logowhite.png";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    var theme = localStorage.getItem('theme')

    return (
        <div>
            <div className="md:grid lg:grid md:grid-cols-12 lg:grid-cols-12 gap-10 p-5">
                <div className="col-span-6">
                    <img className={'w-[150px]'} src={logo} />
                    <p className="text-lg mt-5">Fast, reliable, and hassle-free laundry <br />services tailored for your convenience.</p>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Explore</p>
                    <NavLink to='/'>
                        <p className="text-lg mt-3">Home</p>
                    </NavLink>
                    <NavLink to='/location'>
                        <p className="text-lg mt-3">Location</p>
                    </NavLink>
                    <NavLink to='/service'>
                        <p className="text-lg mt-3">Services</p>
                    </NavLink>
                </div>
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Company Info</p>
                    <NavLink to='/about'>
                        <p className="text-lg mt-3">About Us</p>
                    </NavLink>
                    <NavLink to='/contact'>
                        <p className="text-lg mt-3">Contact Us</p>
                    </NavLink>
                </div>
                
                <div className="col-span-2 mt-5">
                    <p className="font-bold text-lg">Get In Touch</p>
                    <p className="text-lg mt-3"><Phone /></p>
                    <p className="text-lg mt-3"><Mail /></p>
                    <p className="text-lg mt-3"><Facebook /></p>
                    <p className="text-lg mt-3"><Instagram /></p>
                    <p className="text-lg mt-3"><Youtube /></p>
                </div>
            </div>
            <div className="border-t border-gray-200 mx-10 p-5 text-center">
                <p>The Delhi Laundry</p>
            </div>
        </div>
    )
}

export default Footer;