import Link from 'next/link';
import React from 'react';
import * as motion from 'motion/react-client';
import DownloadCVButton from '../components/DownloadCVButton';
import Image from 'next/image';
import undraw from '@/app/public/undraw_web-developer.svg'

const About = () => {
  return (
    <div className='my-20 bg-secondary'>
        <div className='relative flex justify-center mt-20'>
            <div className='absolute text-center mt-5'>
                <h1 className='text-4xl font-intert font-extrabold text-button pb-4'>ABOUT ME</h1>
                <hr className='flex justify-center border-button border-2 w-58 place-items-center'/>
            </div>
            <div>
                <h1 className='text-9xl font-intert font-extrabold opacity-10'>ABOUT ME</h1>
            </div>
        </div>

        <div className='container my-10 flex'>
            <div className='container'>
                <Image
                    src={undraw}
                    alt="Web Developer"
                    width={500}
                />
            </div>
            <div className='container'>
                <h1 className='font-intert font-extrabold text-4xl mb-5'>Hi, Im Jenkins Uwagbai</h1>

                <h2 className='font-intert font-bold text-2xl text-button mb-5'>Frontend Developer</h2>

                <p className='font-intert font-light text-lg mb-4 leading-6'>I specialize in buildng and managing websites and web applications, creating seamless and user-friendly experiences that drive product success. I also enjoy sharing my web development knowledge to help others in the dev community.</p>

                <div className='flex flex-col gap-1 mb-5'>
                    <p><strong className='text-lg mr-14'>Phone:</strong>+2349131779025</p>
                    <p><strong className='text-lg mr-16'>Email:</strong>jenkinsu@hotmail.com</p>
                    <p><strong className='text-lg mr-9'>Location:</strong>Lagos, Nigeria</p>
                    <p><strong className='text-lg mr-7'>Freelance:</strong><span className='text-green-500'>Available</span></p>
                </div>
                

                <motion.button 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: 0.9 }}
                    className='bg-button py-2 px-8 rounded-2xl'
                >
                    <a download href="../public/Jenkins_Uwagbai_CV.pdf">Download CV</a>
                </motion.button>
            </div>
        </div>

        <div className='relative flex justify-center mt-32'>
            <div className='absolute text-center mt-5'>
                <h1 className='text-4xl font-intert font-extrabold text-button pb-4'>SERVICES</h1>
                <hr className='flex justify-center border-button border-2 w-58 place-items-center'/>
            </div>
            <div>
                <h1 className='text-9xl font-intert font-extrabold opacity-10'>SERVICES</h1>
            </div>
        </div>
    </div>
  )
}

export default About