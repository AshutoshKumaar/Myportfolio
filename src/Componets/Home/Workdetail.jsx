import React from 'react'
// import img from './programing.jpg'
import VegetableWale from './firstWeb.png'
import Unxplorednation from './Unexplored.png'
import medservices from './medservicesnew.png'


function Workdetail() {



    return (
        <div className='flex flex-col md:flex-row justify-around bg-transparent md:bg-[#0c292f] p-1 md:p-5 rounded-md'>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={VegetableWale} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>VegetableWale.in</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>Introducing VegetableWale - Your One-Stop Online Freshness Delivered! Developed by the talented Ashutosh Sinha, this innovative website brings the farmer's market right to your doorstep. Explore a wide array of fresh fruits, vegetables, and delectable dry fruits, handpicked for quality and delivered with care. </p>
                </div>
                <a href="https://vegetablewale.in/" target='_blank' rel="noreferrer">
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>
            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={Unxplorednation} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Unexplorednation.com</h1>
                    <p className='text-[15px] tracking-wide font-normal p-1'>Welcome to UnexploredNation, your passport to extraordinary adventures! I'm proud to present this travel tour agency website, handcrafted by Ashutosh Sinha. Get ready to embark on a journey like never before as we unveil the world's hidden gems and awe-inspiring destinations.'</p>
                </div>
                <a href="https://unexplorednation.com/" target='_blank' rel="noreferrer">
                    <div>
                        <p className='absolute rounded-t-xl w-[200px] text-slate-700 bg-slate-400 font-mono top-32 text-center capitalize p-3 shadow-md border-[1px] border-slate-500 hover:bg-slate-800 hover:text-[#ccc] transition ease-in-out duration-500 skew-y-12 hover:skew-y-0'>
                            visit website
                        </p>
                    </div>
                </a>


            </div>
            <div className='w-full md:w-[400px] h-auto bg-slate-900 relative cursor-pointer border-[1px] border-slate-400 mt-4 md:mt-0'>
                <div className='w-full md:w-[400px] h-[270px] p-1'><img src={medservices} alt="website1" className='w-full h-full' /></div>
                <div className='p-5'>
                    <h1 className='font-mono text-[25px] p-1'>Medservices.in</h1>
                    <p className='text-[15px]  font-normal p-1 tracking-normal'>Welcome to MedServices - Your All-in-One Solution for Convenience and Comfort! Crafted by the talented Ashutosh Sinha, this versatile website offers a seamless experience for all your essential needs. From interactive online classes to hassle-free ticket booking, convenient bill payments, and a delightful shopping portal, MedServices has it all.</p>
                </div>
                <a href="https://medservices.in/" target='_blank' rel="noreferrer">
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

export default Workdetail
