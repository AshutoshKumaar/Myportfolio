import React from 'react'
import Mypic from './MyPic.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Content from './Content'

function About() {


    const [Role] = useTypewriter({
        words: ['a Front-End Developer.', 'a React Developer.', 'a CMS Developer.', 'a JavaScript Developer.'],
        loop: 2,
        typeSpeed: 200,
        deleteSpeed: 150,
        delaySpeed: 20000

    })


    return (
        <div className='flex flex-col lg:flex-row justify-around items-center py-12 px-5 md:px-10 lg:px-20 2xl:px-44'>
            <div className='w-full lg:w-[500px] h-auto md:h-[550px] p-1 shadow-md border-[1px] border-slate-600 rounded-md'>
                <img src={Mypic} alt="mypic" className='w-full h-full rounded-md' />
            </div>
            <div className='w-full lg:w-[450px] h-auto lg:h-[550px] border-[1px] border-slate-600 p-5 rounded-md shadow-md mt-4 lg:mt-0'>
                <h3 className='text-xl lg:text-2xl font-mono text-teal-500'>Hello, I'm Ashutosh Sinha,<br />
                    <span className='text-slate-400'>{Role}</span>
                    <Cursor cursorColor='red' cursorStyle='|' cursorBlinking='true' />


                </h3>
                <Content />


            </div>

        </div>
    )
}

export default About
