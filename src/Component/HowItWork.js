import { useEffect, useState } from "react";
import { HomePageText12, HomePageText13, HomePageText14, HomePageText8, HowItWorkStepsData, ScheduleButtonText, ServiceData } from "../Constant/AllWebsite";
import { Truck } from "lucide-react";
import AnimatedSection from "../WebView/Home/AnimatedSection";

export default function HowItWork() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div>
                <div className="bg-slate-100 p-2 rounded-full w-max border border-slate-300 dark:text-black">
                    <p>{HomePageText12}</p>
                </div>
                <p className="text-3xl font-bold my-4">{HomePageText13}</p>
                <p>{HomePageText14}</p>
                <div className="bg-mainColorLightBlue p-3 w-max items-center text-white mt-10 rounded-lg flex justify-center gap-2">
                    <Truck />
                    <p className="text-lg">{ScheduleButtonText}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 col-span-2">
                {
                    HowItWorkStepsData.map((ele, i) => {
                        return (
                            <AnimatedSection>
                            <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white rounded-xl p-5 ">
                                <p className="rounded-lg text-white text-lg bg-mainColorLightBlue dark:bg-white dark:text-black p-2 w-max">Step {i + 1}</p>
                                <p className="text-xl font-bold my-4">{ele.title}</p>
                                <p>{ele.description}</p>
                            </div>
                            </AnimatedSection>
                        )
                    })
                }
            </div>
        </div>
    )
}
