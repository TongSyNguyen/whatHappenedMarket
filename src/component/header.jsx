import React, { useState } from 'react'
import Logo from '../img/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header() {
  const menus = [
    {name:'INTRODUCTION',link:'/'},
    {name:'SOLUTION',link:'/'},
    {name:'RATE PLAN',link:'/'},
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='Header bg-[#111111] w-full h-10 py-2 lg:h-[80px] lg:pt-[24px]  lg:pb-[27px] lg:px-[97px] lg:flex '>
        <div className='lg:w-1/3 xl:w-1/2 pl-5 '>
          <img src={Logo} className='Logo  ' />
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl text-white top-3 cursor-pointer right-6 absolute lg:hidden'>
          <GiHamburgerMenu className={open ? 'close' : 'menu' }  />
        </div>

        <div className={`lg:text-center text-center lg:w-2/3 xl:w-1/2 lg:flex w-full absolute lg:static lg:z-auto z-[1] transition-all duration-500 ease-in ${open ? 'top-[40px]' : 'top-[-200px]'} `}>
          <ul className="main-menu text-white font-eng lg:flex lg:w-[61.5%] lg:text-111526 ">
            {
              menus.map((link, index)=>(
                <li  key={index} className='bg-[#111111] py-2 lg:py-0 lg:w-1/3'>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>
          <div className="line h-0 w-0 lg:h-[23px] lg:w-[1px] lg:bg-[#ccc8c6]"></div>
          <ul className="regis text-white font-eng lg:w-[38.5%] lg:text-111526 lg:flex ">
            <li className='py-2 lg:py-0 bg-[#111111] lg:w-1/4'>
              <a href="/">LOGIN</a>
            </li>
            <li className='py-2 lg:py-0 bg-[#111111] lg:w-3/4'>
              <a href="/">APPLY FOR FREE USE</a>
            </li>
          </ul>
        </div>
    </div>
  )
}
