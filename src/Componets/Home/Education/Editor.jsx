import React from 'react'

function Editor() {

    let open_brackes = '{'
    let closing_brackes = '}'
    return (
        <div>
            <div className='p-2'>
                <div>
                    <code className='hover:cursor-text'>
                        <p><span className='text-[#56a5d6]'>.bachelor's_ degree </span><span>{open_brackes}</span></p>
                        <div className='pl-10 pr-1 text-[16px]'>
                            <p><span className='text-[#b6cefe]'>Year</span>: <span className='text-[#cf9278]'>2017-2020;</span></p>
                            <p><span className='text-[#b6cefe]'>Name</span>: <span className='text-[#cf9278]'>Ashutosh sinha;</span></p>
                            <p><span className='text-[#b6cefe]'>College</span>: <span className='text-[#cf9278]'>Kb jha college, katihar;</span></p>
                            <p><span className='text-[#b6cefe]'>Hons</span>: <span className='text-[#cf9278]'>Accounts;</span></p>
                            <p><span className='text-[#b6cefe]'>Course</span>:<span className='text-[#cf9278]'>&nbsp;B-Com;</span></p>
                            <p><span className='text-[#b6cefe]'>University</span>:<span className='text-[#cf9278]'>&nbsp;B.N.M.U University;</span></p>

                        </div>
                        <p><span>{closing_brackes}</span></p>
                    </code>
                </div>

            </div>

        </div>
    )
}

export default Editor
