import React from "react";
import { HomePageText10, HomePageText11, HomePageText36, HomePageText37, HomePageText8, HomePageText9, LocationData } from "../../Constant/AllWebsite";
import { ArrowBigDown, MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="p-10 mt-10">
      {/* Home Third page  */}
      <center>
        <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
          <p>{HomePageText36}</p>
        </div>
        <div className="flex gap-3 justify-center mb-5">
          <p className="text-4xl font-bold">{HomePageText37}</p>
        </div>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:mx-20 lg:mx-20 mt-10">
        {
          LocationData?.map((ele, i) => {
            return (
              <div className="border rounded-xl p-5">
                <p className="text-mainColorLightBlue text-2xl mb-3 uppercase font-bold">{ele.category}</p>
                <div className="flex gap-2">
                  <MapPin />
                  <p className="text-base">{ele.address}</p>
                </div>
                <p className="text-base">{ele.city}, {ele.state} - {ele.pincode}</p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg mt-5">{ele.openDay}</p>
                    <p className="text-lg">{ele.workingHour}</p>
                  </div>
                  <div className="w-10 h-10 mt-[8%] rounded-full bg-mainColorLightBlue/10 border border-mainColorLightBlue dark:bg-mainColorLightBlue dark:border-white">
                    <center>
                      <div className="mt-1.5">
                        <MapPin />
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Location;