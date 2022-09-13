import Link from 'next/link'
import React, { useState } from 'react'

const hover = "font-semibold";

const Navbar = ({ cartQty }) => {
  const [active, setActive] = useState(false);
  return (
    <div className='sticky top-0 bg-white flex flex-row flex-wrap justify-between items-center px-16 py-4 text-gray-600 font-[500] text-lg'>

      {/* Block 1 */}
      <div className='flex flex-row space-x-4'>
        <Link href='/'>
          <a className='hover:text-xl hover:font-bold transition-all'> Home </a>
        </Link>
        <Link href='/about' className='font-bold'>
          <a className='hover:text-xl hover:font-bold transition-all'> About </a>
        </Link>
      </div>

      {/* Block 2 */}
      <div className='text-3xl font-bold'>
        <img src='/logo-landscape.png' alt='logo' />
      </div>

      {/* Block 3 */}
      <div className='flex flex-row space-x-4'>
        <Link href='/products'>
          <a className='hover:text-xl hover:font-bold transition-all'> Products </a>
        </Link>
        <Link href='/contact'>
          <a className='hover:text-xl hover:font-bold transition-all'> Contact </a>
        </Link>
        <Link href='/cart'>
          {/* <a className='hover:scale-125 hover:font-bold transition-all'> Cart </a> */}
          <button className="relative border-2 border-transparent text-gray-800 rounded-full hover:text-black hover:text-xl focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-indigo-500 text-white">
                {cartQty}
              </div>
            </span>
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar