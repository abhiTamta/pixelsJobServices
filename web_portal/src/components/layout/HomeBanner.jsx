import React from "react";
// import bannerImg from "./../../assets/images/home_banner/slider12.jpg"

const HomeBanner = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(./../../assets/images/home_banner/slider12.jpg)]">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full w-full">
        <div className="w-full">
          <div className="">
            <h1>3,000+ Browse Jobs</h1>
            <h5>Find Jobs, Employment & Career Opportunities</h5>
          </div>
          <div className="h-40 w-full bg-white/60"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
