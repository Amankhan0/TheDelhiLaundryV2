import { useEffect, useState } from "react";
import { HomePageText10, HomePageText11, HomePageText8, HomePageText9, ServiceData } from "../Constant/AllWebsite";
import AnimatedSection from "../WebView/Home/AnimatedSection";

export default function MyService() {
    return (
        <div>
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{HomePageText8}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className={`text-${window.innerWidth > 500?'4xl':'xl'} font-bold`}>{HomePageText9}</p>
                    <p className={`text-${window.innerWidth > 500?'4xl':'xl'} font-bold text-mainColorLightBlue`}>{HomePageText10}</p>
                </div>
                <div>
                    <p className="text-lg md:w-1/2 lg:w-1/2">{HomePageText11}</p>
                </div>
            </center>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                {
                    ServiceData?.map((ele, i) => {
                        return (
                            <AnimatedSection>
                            <div className="border border-slate-100 md:p-5 lg:p-5 rounded-xl">
                                <img className="w-full h-[30vh] rounded-xl" src={ele.img} />
                                <div className="p-4">
                                    <p className="text-2xl font-bold my-2">{ele.title}</p>
                                <p>{ele.description}</p>
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
