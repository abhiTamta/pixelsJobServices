import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(./../../assets/images/home_banner/slider12.jpg)]">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full w-full">
        <div className="w-full">
          <div className="">
            <h1 className="text-7xl text-white mb-3 font-bold"><span className="text-red-600">3,000+</span> Browse Jobs</h1>
            <h5 className="text-3xl text-gray-500 mb-14">Find Jobs, Employment & Career Opportunities</h5>
          </div>
          <div className="p-10 w-full bg-white/60 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
