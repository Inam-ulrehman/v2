import React from 'react'
import { Outlet } from 'react-router-dom'
import BigScreenNavBar from '../components/BigScreenNavBar'
import MobileNavbar from '../components/MobileNavBar'
import NavBar from '../components/NavBar'

const SharedLayout = () => {
  return (
    <div className='section'>
      <BigScreenNavBar />
      <MobileNavbar />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
