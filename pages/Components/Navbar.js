import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-300 px-10 py-10'>
      <div className='flex flex-row justify-between items-center'>
        {/* Block 1 */}
        <div className='flex flex-row space-x-2'>
          <div>
            icon
          </div>
          <div>
            Ski Company
          </div>
        </div>

        {/* Block 2 */}
        <div className='flex flex-row justify-evenly space-x-2'>
          <div className='flex-1 bg-black text-white rounded-md px-6 py-1'>
            <Link href='/'> Home </Link>
          </div>
          <div className='flex-1'>
            <Link href='/products'> Products </Link>
          </div>
          <div className='flex-1'>
            <Link href='/products'> link2 </Link>
          </div>
          <div className='flex-1'>
            <Link href='/products'> link3 </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar