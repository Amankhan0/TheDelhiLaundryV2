import React from "react";
import { FindNearsetLocationButtonText, HomePageText1, HomePageText10, HomePageText11, HomePageText2, HomePageText3, HomePageText4, HomePageText5, HomePageText6, HomePageText7, HomePageText8, HomePageText9, MainVideo, mapImage, ScheduleButtonText } from "../../Constant/AllWebsite";
import { LocateOffIcon, MapPin, PinIcon, Truck } from "lucide-react";
import MyService from "../../Component/MyService";
import HowItWork from "../../Component/HowItWork";
import OurBenifits from "../../Component/OurBenifits";
import OurTestimonial from "../../Component/OurTestimonial";

const Service = () => {
  return (
    <div className="p-10 ">
      {/* Home Third page  */}
      <div className="mt-10">
        <div className="m-10">
          <MyService />
        </div>
      </div>
    </div>
  );
};

export default Service;