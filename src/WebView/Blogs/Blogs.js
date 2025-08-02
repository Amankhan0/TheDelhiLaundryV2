import React from "react";
import { BlogsData, BlogText, Our } from "../../Constant/AllWebsite";

const Blogs = () => {
    return (
        <div className="p-10 mt-10">
            <center>
                <div className="bg-gray-100 p-2 rounded-full w-max border border-gray-300 dark:text-black mb-5">
                    <p>{BlogText}</p>
                </div>
                <div className="flex gap-3 justify-center mb-5">
                    <p className="text-4xl font-bold">{Our}</p>
                    <p className="text-4xl font-bold text-mainColorLightBlue">{BlogText}</p>
                </div>
                <div>
                </div>
            </center>
            <div className="grid grid-cols-12 gap-10 mt-10 md:m-20 lg:m-20">
                <div className="col-span-9">
                    {
                        BlogsData?.map((ele, i) => {
                            return (
                                <div className="mb-10">
                                    <p className="text-mainColorLightBlue text-2xl mb-3 uppercase font-bold">{ele.category}</p>
                                    <p className="text-xl mb-3 font-bold">{ele.title}</p>
                                    <img className="w-[50%] h-[50%]" src={ele.image} />
                                    <p className="text-base mb-3 w-[80%]">{ele.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    window.innerWidth > 700 &&
                    <div className="border-l col-span-3 p-5">
                {
                        BlogsData?.map((ele, i) => {
                            return (
                                <div>
                                    <p className="text-mainColorLightBlue text-sm uppercase font-bold">{ele.category}</p>
                                    <p className="text-xs mb-2 font-bold">{ele.title}</p>
                                    <img className="w-[30%] mb-2 h-[30%]" src={ele.image} />
                                    <p className="text-xs mb-3 w-1/2 line-clamp-6">{ele.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                }
                
            </div>
        </div>
    )
}

export default Blogs;