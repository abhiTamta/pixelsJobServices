import React from 'react'
import { BsBriefcase } from "react-icons/bs";
import Navigation from './Navigation';
import { Button } from 'antd';

const Header = () => {
  return (
    <header className='bg-amber-200'>
        <nav className='flex items-center justify-between px-5 py-3 lg:px-0 lg:w-screen lg:max-w-7xl mx-auto'>
            <div className="pr-5">
                <a href='/' className='flex gap-2 items-center text-2xl font-bold'>
                    <span><BsBriefcase color='red' /></span>
                    <span>Pixels Jobs</span>
                </a>
            </div>
            <div className="menu flex-1">
                <Navigation />
            </div>
            <div className="access">
                <Button>Login</Button>
                <Button>Login</Button>
            </div>
        </nav>
    </header>
  )
}

export default Header