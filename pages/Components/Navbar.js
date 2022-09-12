import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap justify-between items-center px-16 py-5 text-gray-600 body-font bg-blue-100 text-lg'>

      {/* Block 1 */}
      <div className='flex flex-row space-x-4'>
        <Link href='/'> Home </Link>
        <Link href='/about'> About </Link>
        <Link href='/work'> Work </Link>
      </div>

      {/* Block 2 */}
      <div className='text-3xl font-bold'>
        SKI Comp
      </div>

      {/* Block 3 */}
      <div className='flex flex-row space-x-4'>
        <Link href='/news'> News </Link>
        <Link href='/contact'> Contact </Link>
        <Link href='/cart'> Cart </Link>

      </div>
    </div>
  )
}

export default Navbar