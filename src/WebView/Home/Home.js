import React from "react";
import { FindNearsetLocationButtonText, HomePageText1, HomePageText2, HomePageText3, HomePageText4, HomePageText5, HomePageText6, HomePageText7, MainVideo, mapImage, redirectToWhatsapp, ScheduleButtonText } from "../../Constant/AllWebsite";
import { MapPin, Truck } from "lucide-react";
import MyService from "../../Component/MyService";
import HowItWork from "../../Component/HowItWork";
import OurBenifits from "../../Component/OurBenifits";
import OurTestimonial from "../../Component/OurTestimonial";
import AnimatedSection from "./AnimatedSection";
import OfferCard from "../../Component/OfferCard";
import FAQCard from "../../Component/FAQCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10">
      {/* Home First page */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="mt-[10%] md:ml-20 lg:ml-20">
            <p className="text-lg font-bold mb-8">{HomePageText1}</p>
            <h1 className="text-[5xl] mb-5 font-bold">{HomePageText2}</h1>
            <h1 className="text-5xl mb-5 font-bold text-mainColorLightBlue">{HomePageText3}</h1>
            <h1 className="text-4xl text-slate-400 font-bold">{HomePageText4}</h1>
            <div onClick={()=>redirectToWhatsapp()} className="cursor-pointer bg-mainColorLightBlue p-3 w-max items-center text-white mt-10 rounded-lg flex justify-center gap-2 hover:scale-105 transition-transform">
              <Truck />
              <p className="text-lg">{ScheduleButtonText}</p>
            </div>
          </div>
          <div>
            <video
              className="rounded-3xl w-[600px] h-[600px] object-cover"
              loop
              autoPlay
              muted
              playsInline
              src={MainVideo}
            ></video>
          </div>
        </div>
      </AnimatedSection>

      {/* Home Second page */}
      <AnimatedSection>
        <div className="bg-gray-100 p-10 mt-40 rounded-3xl dark:bg-mainColorLightBlue">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-500 dark:text-white mb-6">{HomePageText5}</p>
              <h1 className={`text-${window.innerWidth > 500?'5xl':'2xl'} font-bold mb-8 dark:text-white`}>{HomePageText6}</h1>
              <h1 className="text-lg text-gray-500 dark:text-white">{HomePageText7}</h1>
              <NavLink to='/location' className="bg-mainColorLightBlue dark:bg-white dark:text-black p-3 w-max items-center text-white mt-10 rounded-lg flex justify-center gap-2 hover:scale-105 transition-transform">
                <MapPin />
                <p className={`text-${window.innerWidth > 500?'lg':'sm'}`}>{FindNearsetLocationButtonText}</p>
              </NavLink>
            </div>
            <div>
              <img src={mapImage} className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Home Third page */}
      <AnimatedSection>
        <div className="mt-40">
          <MyService />
        </div>
      </AnimatedSection>

      {/* Home Fourth page */}
      <AnimatedSection>
        <div className="mt-40">
          <HowItWork />
        </div>
      </AnimatedSection>

      {/* Home Fifth page */}
      <AnimatedSection>
        <div className="mt-40">
          <OurBenifits />
        </div>
      </AnimatedSection>

      {/* Home Sixth page */}
      <AnimatedSection>
        <div className="mt-40">
          <OurTestimonial />
        </div>
      </AnimatedSection>

      {/* {Offer Page} */}
      <div className="mt-40">
        <OfferCard />
      </div>

      {/* {FAQ Page} */}
      <div className="mt-40">
        <FAQCard />
      </div>
    </div>
  );
};

export default Home;
