import React from 'react'
import AdminPanel from './Admin.png'
import motiroti from './motirotiweb.png'
import QuizApp from './QuizApp.png'


function WorkdetailThird() {
    return (
        <div className='flex flex-col md:flex-row justify-around bg-transparent md:bg-[#0c292f] p-1 md:p-5 rounded-md'>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={motiroti} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Bakery Website</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>Indulge your senses in the sweet delights of our new Bakery Website! As the mastermind behind this delectable online experience, we've baked up a virtual haven for all dessert lovers. From mouthwatering pastries to heavenly cakes, our website showcases a delightful array of freshly baked treats.</p>
                </div>
                <a href="https://cool-sprite-bc57bb.netlify.app/" target='blank'>
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>
            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={QuizApp} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Quiz App</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>
                        Welcome to QuizWeb, the brainchild of Ashutosh Sinha, a dedicated math teacher with a passion for empowering students! Designed with love and expertise, this interactive platform is tailored to ignite the spark of learning in young minds. As a teacher, Ashutosh created QuizWeb to make math fun, engaging, and rewarding for students.
                    </p>
                </div>
                <a href="https://ashutoshquiz.netlify.app/" target='blank'>
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>


            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative cursor-pointer border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={AdminPanel} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Admin Panel</h1>
                    <p className='text-[15px] tracking-normal font-normal p-1'><strong>The username and password will be same.</strong><br />
                        welcome to the Admin Panel – the nucleus of control, insight, and efficiency. Your platform's journey is now marked by empowered management, data-driven decisions, customization, collaboration, security, and evolution.
                    </p>
                </div>
                <a href="https://luminous-syrniki-c24261.netlify.app" target='blank'>
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>

            </div>
        </div >
    )
}

export default WorkdetailThird
