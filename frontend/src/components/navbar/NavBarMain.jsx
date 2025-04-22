import React from 'react'
import NavBarLogo from './NavBarLogo'
import NavBarLinks from './NavBarLinks'
import NavBarBtn from './NavBarBtn'

const NavBarMain = () => {
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2    '>
    <div>
      <NavBarLogo />
      <NavBarLinks />
      <NavBarBtn />
    </div>
    </nav>
  )
}

export default NavBarMain
