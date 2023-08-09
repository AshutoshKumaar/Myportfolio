import React from 'react'
import Kafeene from './Kafeene.png'
import Shoplane from './Shoplane.png'
import IplWeb from './Ipl.png'

function WorkdetailSecond() {
    return (
        <div className='flex flex-col md:flex-row justify-around bg-transparent md:bg-[#0c292f] p-1 md:p-5 rounded-md'>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={Kafeene} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Kafeene web</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>
                        <strong>Id : 'Ashu' and Pass : 'Ashu'</strong><br />Introducing Kafeene Web Project, an assignment by the esteemed Edyoda team, brought to life by a skilled developer. This dynamic web project showcases the seamless blend of creativity and technical expertise, offering visitors an immersive and engaging experience. </p>
                </div>
                <a href="https://fantastic-squirrel-c67a54.netlify.app/login" target='_blank' rel="noreferrer" >
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>
            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={Shoplane} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Shoplane Cloning</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>Introducing Shoplane Website, an impressive project assigned by Edyoda, where the developer shines with an outstanding score of 80 out of 100! This website is a testament to the developer's dedication and skill, showcasing their ability to create a user-friendly and visually appealing digital shopping platform.</p>
                </div>
                <a href="https://newshopsomething.netlify.app/" target='_blank' rel="noreferrer" >
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>


            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative cursor-pointer border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={IplWeb} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Ipl Cloning</h1>
                    <p className='text-[15px] tracking-normal font-normal p-1'>Presenting the IPL Website Cloning project, a successful endeavor by an adept developer from Edyoda! With meticulous attention to detail and an expert touch in web development, this talented individual has replicated the IPL website flawlessly. Cricket enthusiasts can now enjoy an immersive experience akin to the original site.</p>
                </div>
                <a href="https://stellular-kelpie-f39fef.netlify.app" target='_blank' rel="noreferrer">
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

export default WorkdetailSecond
