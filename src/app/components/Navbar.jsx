'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white'>
        <nav className='flex justify-between p-4 text-black'>
            {/* logo */}
            <div>
                <Link href='/'>
                    <h1 className='font-bold text-2xl'>
                        Jenkins <span className='text-blue-300'>Uwagbai</span>
                    </h1>
                </Link>
            </div>

            {/* Navgation Links */}
            <div className='flex justify-between gap-20 font-medium text-xl'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Project</Link>
                <Link href='/'>Contact</Link>
            </div>


            {/* Contact Details */}
            <div className='flex gap-5'>
                <vr className='border border-black'/>
                <p>+2349131779025</p>
                
            </div>
        </nav>
    </div>
  )
};

export default Navbar