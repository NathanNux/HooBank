import React from 'react'

import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [ active, setActive ] = useState('Home')
    const [ toggle, setToggle ] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
            </li>

            // we've added the onClick event to the list item, and we've set the active state to the title of the nav item. This way, when we click on a nav item, the active state will be updated to the title of the nav item we clicked on and will stay highlighted until we click on another nav item. 
            //This can also be done through higlighting other elements like circle divs or some animation with its text.
        ))}
        </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img 
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)} // we've added an onClick event to the image, and we've set the toggle state to the opposite of its previous state. This way, when we click on the image, the toggle state will be updated to the opposite of its previous state, and the menu will be shown or hidden accordingly. This is correct
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${
                                active === nav.title ? "text-white" : "text-dimWhite"
                            } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={() => setActive(nav.title)}
                            >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>

                            // we've added the onClick event to the list item, and we've set the active state to the title of the nav item. This way, when we click on a nav item, the active state will be updated to the title of the nav item we clicked on and will stay highlighted until we click on another nav item. 
                            //This can also be done through higlighting other elements like circle divs or some animation with its text.
                        ))}
                    </ul>
                </div>
            </div>
    </nav>
  )
}

export default Navbar