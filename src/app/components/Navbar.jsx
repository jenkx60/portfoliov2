'use client'

import Link from 'next/link';
import React from 'react';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='bg-primary w-full'>
        <nav className='flex justify-between p-4 text-gray-300'>
            {/* logo */}
            <div>
                <Link href='/'>
                    <h1 className='font-dmSerif font-bold text-2xl'>
                        Jenkins <span className='text-activehover'>Uwagbai</span>
                    </h1>
                </Link>
            </div>

            {/* Navgation Links */}
            <div className='flex justify-between gap-20 font-medium text-xl font-dmSans '>
                <Link href='/' className='hover:text-activehover'>Home</Link>
                <Link href='/' className='hover:text-activehover'>About</Link>
                <Link href='/' className='hover:text-activehover'>Project</Link>
                <Link href='/' className='hover:text-activehover'>Contact</Link>
            </div>


            {/* Contact Details */}
            <div className='flex gap-5 font-dmSans'>
                <vr className='border border-black'/>
                <p>+2349131779025</p>
                <MdOutlineLightMode /> <MdLightMode />
            </div>
        </nav>
    </div>
  )
};

export default Navbar