import React from 'react'

const About = () => {
  return (
    <div className='my-20 bg-secondary'>
        <div className='relative flex justify-center mt-20'>
            <div className='absolute text-center mt-5'>
                <h1 className='text-5xl font-intert font-semibold pb-4'>ABOUT ME</h1>
                <hr className='flex justify-center border-button border-2 w-58 place-items-center'/>
            </div>
            <div>
                <h1 className='text-9xl font-intert font-extrabold opacity-10'>ABOUT ME</h1>
            </div>
        </div>

        <div className='text-center font-intert font-semibold text-xl mt-12'>
            <h3>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
        </div>

        <div className='my-16'>
            <div>
                <h1 className='container font-intert font-bold text-2xl'>Get to know me!</h1>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About