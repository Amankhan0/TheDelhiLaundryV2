import { useEffect, useState } from "react";
import { HomePageText10, HomePageText11, HomePageText12, HomePageText13, HomePageText14, HomePageText15, HomePageText16, HomePageText17, HomePageText18, HomePageText19, HomePageText20, HomePageText21, HomePageText22, HomePageText23, HomePageText24, HomePageText25, HomePageText26, HomePageText27, HomePageText28, HomePageText29, HomePageText30, HomePageText8, HomePageText9, HowItWorkStepsData, ScheduleButtonText, ServiceData } from "../Constant/AllWebsite";
import { Truck, Watch } from "lucide-react";
import AnimatedSection from "../WebView/Home/AnimatedSection";

export default function OurBenifits() {
    return (
        <div>
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{HomePageText15}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className={`text-${window.innerWidth > 500?'4xl':'lg'} font-bold`}>{HomePageText16}</p>
                    <p className={`text-${window.innerWidth > 500?'4xl':'lg'} font-bold text-mainColorLightBlue`}>{HomePageText17}</p>
                </div>
                <div>
                    <p className="text-lg md:w-1/2 lg:w-1/2">{HomePageText18}</p>
                </div>
            </center>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 items-center">
                <div>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText19}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText20}</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl my-5">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText21}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText22}</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText23}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText24}</p>
                        </div>
                    </AnimatedSection>
                </div>
                <AnimatedSection>
                    <div>
                        <img src="https://framerusercontent.com/images/HYR4WprvCLbOQUTlPM4FheV80P4.png" className="rounded-xl h-[100%] w-[100%]" />
                    </div>
                </AnimatedSection>

                <div>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText25}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText26}</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl my-5">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText27}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText28}</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="bg-gray-50 dark:bg-mainColorLightBlue dark:text-white p-5 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="p-2 border-mainColorLightBlue dark:border-white dark:bg-white/25 border rounded-lg bg-mainColorLightBlue/10">
                                    <Watch />
                                </div>
                                <p className="text-xl font-bold">{HomePageText29}</p>
                            </div>
                            <p className="mt-2 text-base">{HomePageText30}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div >
    )
}
