import React from 'react'
import WorkList from './WorkList'
function Work() {
    return (
        <div className='bg-[#0c292f]'>
            <header className='py-10 px-5 md:px-14'>
                <h1 className='text-center tracking-normal text-slate-600 hover:text-[#000] text-[30px] font-bold p-5 shadow-md border-[1px] border-slate-400 hover:border-yellow-400 rounded-2xl skew-x-4 skew-y-2 hover:-skew-x-4 hover:-skew-y-2 cursor-pointer transition ease-in-out duration-700 hover:bg-[#d4af37]'> Work experience</h1>
            </header>
            <section className='py-10 px-2 md:px-14' >
                <WorkList />

            </section>

        </div>
    )
}

export default Work
