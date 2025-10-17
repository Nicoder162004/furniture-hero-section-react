import React from 'react'
import Logo from '../Atoms/Logo'
import MenuList from '../Organisms/MenuList'
import Button from '../Atoms/Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <Logo/>
      <MenuList/>
     <Button type="primary">Sign Up</Button>
    </div>
  )
}

export default Navbar
