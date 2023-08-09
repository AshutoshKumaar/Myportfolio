import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Results() {
    const dataResults = `During the years 2017 to 2020, I pursued my B.Com degree with a focus on Accounts at KB Jha College in Katihar. This educational journey was affiliated with B.N.M.U University. my's time at KB Jha College was marked by academic growth and personal development. As a student specializing in Accounts, I delved into various subjects related to finance, taxation, auditing, and other aspects of accounting. The curriculum at KB Jha College would have provided me with a strong foundation in financial management, cost accounting, and other essential areas of the field..`
    const [results] = useTypewriter(
        {
            words: [dataResults],
            loop: 1,
            typeSpeed: 20,
            deleteSpeed: 30,
            delaySpeed: 800
        }
    )
    return (
        <div className='p-5'>
            <p className='text-[16px] font-mono tracking-normal text-[#ffbd44]'>{results}</p>
            <Cursor />

        </div>
    )
}

export default Results
