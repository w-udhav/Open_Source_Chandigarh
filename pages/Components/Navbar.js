import Link from 'next/link'
import React, { useState } from 'react'

const hover = "font-semibold";

const Navbar = () => {
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
          <a className='hover:scale-125 hover:font-bold transition-all'> Cart </a>
        </Link>

      </div>
    </div>
  )
}

export default Navbar