import React from 'react'

function EditorThird() {
    let open_brackes = '{'
    let closing_brackes = '}'
    return (
        <div>
            <div className='p-2'>
                <div>
                    <code className='hover:cursor-text'>
                        <p><span className='text-[#56a5d6]'>.working_experience </span><span>{open_brackes}</span></p>
                        <div className='pl-10 pr-1 text-[16px]'>
                            <p><span className='text-[#b6cefe]'>Year</span>: <span className='text-[#cf9278]'>2022-2023;</span></p>
                            <p><span className='text-[#b6cefe]'>Name</span>: <span className='text-[#cf9278]'>Ashutosh Kumar;</span></p>
                            <p><span className='text-[#b6cefe]'>Company</span>: <span className='text-[#cf9278]'>WebXpose;</span></p>
                            <p><span className='text-[#b6cefe]'>Role</span>: <span className='text-[#cf9278]'>Front-End Developer;</span></p>
                            <p><span className='text-[#b6cefe]'>Major_language</span>:<span className='text-[#cf9278]'>&nbsp;React.js, JavaScript;</span></p>
                            <p><span className='text-[#b6cefe]'>Website</span>:<span className='text-[#cf9278]'>&nbsp;thewebxpose.com;</span></p>

                        </div>
                        <p><span>{closing_brackes}</span></p>
                    </code>
                </div>

            </div>
        </div>
    )
}

export default EditorThird
