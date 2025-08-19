import React from "react";
import bannerImg from "../../assets/images/home_banner_img.jpg";
import { TagIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
const HomeBanner = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-screen h-screen bg-blue-950/85">
        <div className="w-screen h-screen max-w-7xl mx-auto pt-18 px-3 flex lg:items-center">
          <div className="w-full">
            <div className="text-4xl text-white mb-4 lg:text-7xl mb-2">
              <span className="text-orange-500 font-bold">3,000+</span> Browse
              Jobs
            </div>
            <div className="text-gray-400 text-xl lg:text-2xl">
              Find Jobs, Employment & Career Opportunities
            </div>
            <div className="w-full bg-gray-600 p-10 rounded-lg mt-12 flex lg:flex-row flex-col gap-5">
              <div className="lg:flex-11/12 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="what are you looking for?"
                    className="w-full py-3 px-4 bg-white text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded"
                  />
                </div>
                <div>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex-1/12">
                <button className="flex bg-amber-500 w-full justify-center items-center py-3 rounded-lg text-white px-5 gap-2 text-xl font-bold">
                  <MagnifyingGlassIcon width={20} /> Search{" "}
                </button>
              </div>
            </div>
            <div className="mt-10 text-white flex flex-wrap gap-1">
              <TagIcon width={20} color="white" /> Trending Keywords:
              <a href="#">developer,</a> <a href="#">developer,</a>
              <a href="#">developer,</a> <a href="#">developer,</a>
              <a href="#">developer,</a> <a href="#">developer,</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
