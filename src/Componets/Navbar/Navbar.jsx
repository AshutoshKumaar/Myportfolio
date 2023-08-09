import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCrossCircled } from 'react-icons/rx'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='max-w-full h-auto px-0 md:px-20 py-5 shadow-md border-b-[1px] border-slate-700 flex flex-row justify-between items-center bg-[#163238] sticky top-0 z-10'>
            <div className='px-5 md:px-5'>
                <h3 className='text-xl first-letter:text-4xl first-letter:font-semibold font-mono first-letter:text-[#3C156E] text-red-700'><a href='facebook.com'>Ashutosh</a></h3>
            </div>
            <nav className='mr-10 hidden md:block'>
                <ul className='flex flex-row justify-between text-[12px] capitalize font-semibold cursor-pointer'>
                    <li className='px-5 shadow-xl py-1 border-b-[1px] border-slate-600 hover:bg-[#0c131f] hover:text-[#fafafa] mr-2 rounded-sm'>Home</li>
                    <li className='px-5 shadow-xl py-1 border-b-[1px] border-slate-600 hover:bg-[#0c131f] hover:text-[#fafafa] mr-2 rounded-sm'>Work</li>
                    <li className='px-5 shadow-xl py-1 border-b-[1px] border-slate-600 hover:bg-[#0c131f] hover:text-[#fafafa] mr-2 rounded-sm'>Experience</li>
                    <li className='px-4 shadow-xl py-1 border-b-[1px] border-slate-600 hover:bg-[#0c131f] hover:text-[#fafafa] rounded-sm'>About</li>
                    <li className='px-4 shadow-xl py-1 border-b-[1px] border-slate-600 hover:bg-[#0c131f] hover:text-[#fafafa] rounded-sm'>Contact</li>
                </ul>
            </nav>
            {/* responsive navbar */}
            <nav className={`fixed z-20 bg-[#0c292f] w-full top-20  p-10 block md:hidden ${toggle ? 'right-0' : 'right-[-100%]'} duration-500`}>
                <ul className='text-[16px] capitalize font-semibold cursor-pointer text-center w-[120px] mx-auto bg-[#163238] p-[10px] rounded-md border-[1px] border-[#d4af37]'>
                    <li className='py-1 border-b-[1px] border-slate-600 bg-[#0c131f] hover:bg-[#d4af37] text-[#fafafa] my-2 rounded-sm w-[100px]'>Home</li>
                    <li className='py-1 border-b-[1px] border-slate-600 bg-[#0c131f] text-[#fafafa] my-2 rounded-sm w-[100px] hover:bg-[#d4af37]'>Home</li>
                    <li className='py-1 border-b-[1px] border-slate-600 bg-[#0c131f] text-[#fafafa] my-2 rounded-sm w-[100px] hover:bg-[#d4af37]'>Home</li>
                    <li className='py-1 border-b-[1px] border-slate-600 bg-[#0c131f] text-[#fafafa] my-2 rounded-sm w-[100px] hover:bg-[#d4af37]'>Home</li>
                    <li className='py-1 border-b-[1px] border-slate-600 bg-[#0c131f] text-[#fafafa] my-2 rounded-sm w-[100px] hover:bg-[#d4af37]'>Home</li>
                </ul>
            </nav>

            <div className='block md:hidden pr-5'>
                {
                    toggle ? <RxCrossCircled className='text-[35px] font-bold' onClick={() => { setToggle(!toggle) }} /> : <GiHamburgerMenu className='text-[30px] font-bold' onClick={() => { setToggle(!toggle) }} />
                }

            </div>

        </div >
    )
}

export default Navbar
