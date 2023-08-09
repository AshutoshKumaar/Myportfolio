import React from 'react'

function EditorSecond() {
    let open_brackes = '{'
    let closing_brackes = '}'
    return (
        <div>
            <div className='p-2'>
                <div>
                    <code className='hover:cursor-text'>
                        <p><span className='text-[#56a5d6]'>.technical's_ degree </span><span>{open_brackes}</span></p>
                        <div className='pl-10 pr-1 text-[16px]'>
                            <p><span className='text-[#b6cefe]'>Year</span>: <span className='text-[#cf9278]'>2020-2022;</span></p>
                            <p><span className='text-[#b6cefe]'>Name</span>: <span className='text-[#cf9278]'>Ashutosh Sinha;</span></p>
                            <p><span className='text-[#b6cefe]'>Institute</span>: <span className='text-[#cf9278]'>EdYoda Digital Platform;</span></p>
                            <p><span className='text-[#b6cefe]'>Major_sub</span>: <span className='text-[#cf9278]'>JavaScript;</span></p>
                            <p><span className='text-[#b6cefe]'>Course</span>:<span className='text-[#cf9278]'>&nbsp;Mern Stack Developer;</span></p>
                            <p><span className='text-[#b6cefe]'>University</span>:<span className='text-[#cf9278]'>&nbsp;EdYoda digital University;</span></p>

                        </div>
                        <p><span>{closing_brackes}</span></p>
                    </code>
                </div>

            </div>
        </div>
    )
}

export default EditorSecond
