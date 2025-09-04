import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import HomeBanner from './HomeBanner'

const MainLayout = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <Outlet />
    </>
  )
}

export default MainLayout