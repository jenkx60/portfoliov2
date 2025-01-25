import React, { createRef } from 'react'
import Navbar from './components/Navbar'
import About from './about/page'
import Image from 'next/image'
import jenkins from '../app/public/IMG_0011 2.JPG';
import * as motion from 'motion/react-client';
// import { useInView } from 'framer-motion';
// import { useInView, useViewportScroll } from 'framer-motion';

const HomePage = () => {
  // const ball = {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: "#dd00ee",
  //   borderRadius: "50%",
  // }

  // const ref = createRef()
  // const { isInView } = useInView();

  return (
    <div className='bg-primary'>
      <Navbar />
      <div className='flex gap-14 bg-primary my-20'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='container w-1/2 bg-primary flex flex-col justify-center place-items-start text-left gap-5'
        >
          <h2 className='text-4xl  font-intert text-left'>Hello, I&apos;m</h2>

          <h1 className='text-9xl text-left font-extrabold font-intert'>Jenkins <br /> Uwagbai</h1>

          <h2 className='text-2xl'>Frontend Developer</h2>

          <motion.button 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.9 }}
            className='bg-button py-2 px-8 rounded-2xl'
          >
            Hire Me!
          </motion.button>
        </motion.div>
        {/* <div className='container w-1/2 bg-primary flex flex-col justify-center place-items-start text-left gap-5'>
          
        </div> */}
        <div className='w-1/2 bg-primary'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={jenkins}
              alt="Jenkins Uwagbai"
              width={600}
              className='rounded-full'
            />
          </motion.div>
          
          
        </div>
      </div>
      <About />
    </div>
  )
}

export default HomePage