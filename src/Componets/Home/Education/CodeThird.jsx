import React, { useState } from 'react'
import Style from './code.module.css'
// import Editor from './Editor'
import ResultsTwo from './ResultsTwo'
import EditorThird from './EditorThird'

function Code() {
    const [present, setPresent] = useState(true)

    function makeSomeChanges() {
        setPresent(!present)
    }

    return (
        <div className='my-6 md:my-0'>
            <div className="w-full md:w-[410px] h-auto bg-[#011522] rounded-[8px] z-[1]">
                <div className="flex items-center p-[9px]">
                    <div className="py-[0px] px-[4px]">
                        <span className="inline-block items-center w-[10px] h-[10px] p-[1px] rounded-full bg-[#ff605c]"></span>
                    </div>
                    <div className="py-[0px] px-[4px]">
                        <span className="inline-block items-center w-[10px] h-[10px] p-[1px] rounded-full bg-[#ffbd44]"></span>
                    </div>
                    <div className="py-[0px] px-[4px]">
                        <span className="inline-block items-center w-[10px] h-[10px] p-[1px] rounded-full bg-[#00ca4e]"></span>
                    </div>
                </div>
                <div>
                    {present ? <EditorThird /> : <ResultsTwo />}

                    <div className='pb-5 text-center'>
                        {present ? <button className={Style.btn} onClick={makeSomeChanges}>Results</button> : <button className={Style.btn} onClick={makeSomeChanges}>Go Back</button>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Code
