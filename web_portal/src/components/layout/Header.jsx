import React from "react";
import { BsBriefcase } from "react-icons/bs";
import Navigation from "./Navigation";
import { Button, Divider } from "antd";

const Header = () => {
  return (
    <header className="bg-amber-200">
      <nav className="flex items-center justify-between px-5 py-3 lg:px-0 lg:w-screen lg:max-w-7xl mx-auto">
        <div className="pr-5">
          <a href="/" className="flex gap-2 items-center text-2xl font-bold">
            <span>
              <BsBriefcase color="red" />
            </span>
            <span>Pixels Jobs</span>
          </a>
        </div>
        <div className="menu">
          <Navigation />
        </div>
        <div className="access">
          <Button className="mr-2">Login</Button>
          <Button>Register</Button>
          <Divider size="large" type="vertical" variant="solid" style={{width : "1px", height : "20px", background : "#919191"}} />
          <Button>For employers</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
