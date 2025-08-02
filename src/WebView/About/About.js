import React from "react";
import { AboutDescription, AboutPageImage1, AboutPageImage2, AboutPageImage3, HomePageText38, HomePageText39, HomePageText40, HomePageText8 } from "../../Constant/AllWebsite";
import HowItWork from "../../Component/HowItWork";
import OurBenifits from "../../Component/OurBenifits";
import OurTestimonial from "../../Component/OurTestimonial";

const About = () => {
    return (
        <div className="p-10 mt-10">
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{HomePageText38}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className="text-4xl font-bold">{HomePageText39}</p>
                    <p className="text-4xl font-bold text-mainColorLightBlue">{HomePageText40}</p>
                </div>
                <div>
                </div>
            </center>
            <div className="m-10 text-center ">
                <p className="text-lg">{AboutDescription}</p>
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

export default About;