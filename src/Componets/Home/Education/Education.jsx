import React from 'react'
import Code from './Code'
import CodeSecond from './CodeSecond'
import CodeThird from './CodeThird'

function Education() {
    return (
        <div className='bg-[#163238] p-4'>
            <h3 className='my-2 p-3 font-mono text-[40px] text-slate-300 text-center'>Education</h3>
            <div className='py-10 px-5 md:px-24 flex flex-col md:flex-row justify-between'>
                <Code />
                <CodeSecond />
                <CodeThird />


            </div>

        </div >
    )
}

export default Education
