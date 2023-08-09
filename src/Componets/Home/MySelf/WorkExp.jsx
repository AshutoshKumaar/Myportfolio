import React from 'react'
import Design from './Design.png'
import Dev from './Dev.png'
import Ui from './UI.png'
import Graphic from './Graphic.png'

function WorkExp() {
    return (
        <div>
            <div className='p-4 md:p-8'>
                <h3 className='text-[25px] md:text-[30px] font-mono text-slate-400 underline underline-offset-[20px]'>About me</h3>
                <p className='px-2  py-8 text-[16px] text-slate-300 tracking-wide '>
                    Introducing Ashutosh Sinha, A Front-End Maestro!  With an artistic flair and a touch of coding magic, My weaves enchanting digital experiences that leave users in awe. Armed with a deep understanding of cutting-edge technologies, this tech virtuoso effortlessly brings designs to life with seamless functionality and eye-catching aesthetics.
                </p>
            </div>
            <div>
                <h3 className='px-4 md:px-8 text-[25px] md:text-[30px] font-mono text-slate-500'>what I'm currently doing?</h3>
                <div className='flex flex-row flex-wrap justify-around p-5 md:py-7 md:px-8 md:p-0 '>
                    {/* Web Design Container */}
                    <div className='w-full md:w-[450px] h-auto md:h-[200px] flex flex-col md:flex-row  items-center rounded-lg shadow-md shadow-black border-[1px] border-slate-700'>
                        <div className='w-[150px] h-[150px]'>
                            <img src={Design} alt="Web_design_Image" className='w-full h-full' />
                        </div>
                        <div className='w-[330px] text-left p-5 md:p-0'>
                            <h3 className='text-[20px] md:text-[25px] font-mono mb-1 text-slate-400'>Web Design </h3>
                            <p className='text-sm font-thin text-[#ccc] tracking-wide'>"Crafting digital masterpieces where creativity meets functionality, I'm a web design master, delivering stunning and user-friendly online experiences !"</p>
                        </div>
                    </div>
                    {/* Web Development Container */}
                    <div className='w-full md:w-[450px] h-auto md:h-[200px]  flex flex-col md:flex-row items-center rounded-lg shadow-md shadow-black border-[1px] border-slate-700 my-5 md:my-0'>
                        <div className='w-[150px] h-[150px]'>
                            <img src={Dev} alt="Web_Dev_image" className='w-full h-full' />
                        </div>
                        <div className='w-[330px] text-left p-5 md:p-0'>
                            <h3 className='text-[20px] md:text-[25px] font-mono mb-1 text-slate-400'>Web Development </h3>
                            <p className='text-sm font-thin text-[#ccc] tracking-wide'>"Web development virtuoso, Ashutosh Sinha, fuses innovation and expertise to create seamless and extraordinary online solutions as well mastering with JavaScript frameworks."</p>
                        </div>
                    </div>
                    {/* Graphic design Container */}
                    <div className='w-full md:w-[450px] h-auto md:h-[200px] flex flex-col md:flex-row items-center my-4 rounded-lg shadow-md shadow-black border-[1px] border-slate-700'>
                        <div className='w-[150px] h-[150px]'>
                            <img src={Graphic} alt="Graphic_image" className='w-full h-full' />
                        </div>
                        <div className='w-[330px] text-left p-5 md:p-0'>
                            <h3 className='text-[20px] md:text-[25px] font-mono mb-1 text-slate-400'>Graphic Design </h3>
                            <p className='text-sm font-thin text-[#ccc] tracking-wide'>"An artist of communication, I craft visually captivating stories in a single stroke through graphic design, and I'm exceptionally skilled at it."</p>
                        </div>
                    </div>
                    {/* UI/UX Container */}
                    <div className='w-full md:w-[450px] h-auto md:h-[200px] flex flex-col md:flex-row items-center my-4 rounded-lg shadow-md shadow-black border-[1px] border-slate-700'>
                        <div className='w-[150px] h-[150px]'>
                            <img src={Ui} alt="UI/ux_Image" className='w-full h-full' />
                        </div>
                        <div className='w-[330px] text-left p-5 md:p-0'>
                            <h3 className='text-[20px] md:text-[25px] font-mono mb-1 text-slate-400'>UI/UX Design </h3>
                            <p className='text-sm font-thin text-[#ccc] tracking-wide'>"I am UI/UX Visionary, crafting unforgettable digital experiences with a perfect blend of aesthetics and functionality. Prepare to be enchanted! "</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp
