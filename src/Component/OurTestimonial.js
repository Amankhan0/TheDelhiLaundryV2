import { useEffect, useState } from "react";
import { HomePageText10, HomePageText11, HomePageText31, HomePageText32, HomePageText33, HomePageText34, HomePageText35, HomePageText8, HomePageText9, MainLightBlueColor, ServiceData, StaffData } from "../Constant/AllWebsite";
import { Quote, Star } from "lucide-react";
import AnimatedSection from "../WebView/Home/AnimatedSection";

export default function OurTestimonial() {
    return (
        <div>
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{HomePageText31}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className="text-sm md:text-4xl lg:text-4xl font-bold">{HomePageText32}</p>
                    <p className="text-sm md:text-4xl lg:text-4xl font-bold text-mainColorLightBlue">{HomePageText33}</p>
                    <p className="text-sm md:text-4xl lg:text-4xl font-bold">{HomePageText34}</p>
                </div>
                <div>
                    <p className="text-lg md:w-1/2 lg:w-1/2">{HomePageText35}</p>
                </div>
            </center>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                {
                    StaffData.map((ele, i) => {
                        return (
                            <AnimatedSection>
                            <div className="border p-2  rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                    <div className="col-span-1 border bg-gray-100  rounded-xl">
                                        <img src={ele.image} />
                                    </div>
                                    <div className="col-span-2 border rounded-xl">
                                        <div className="m-5">
                                            <Quote color={MainLightBlueColor} />
                                            <p className="text-lg mt-5">{ele.description}</p>
                                            <div className="mt-[13%] flex justify-between flex-wrap gap-5 items-center">
                                                <div>
                                                    <p className="text-xl font-bold">{ele.name}</p>
                                                    <p>{ele.designation}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    {Array.from({ length: 5 }, (_, index) => (
                                                        <Star key={index} size={24} className={index < ele.star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </AnimatedSection>
                        )
                    })
                }
            </div>
        </div>
    )
}
