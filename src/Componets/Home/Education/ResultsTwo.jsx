import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function ResultsTwo() {
    const dataResults = `From the year 2022 to 2023, I made valuable contributions to the tech industry through my role as a Front-End Developer at WebXpose. With a focus on creating engaging and user-friendly web interfaces, I harnessed my expertise in React.js and JavaScript to craft visually appealing and functional websites. At WebXpose, I played a pivotal role in the development and enhancement of the company's web projects. Leveraging my proficiency in React.js, a popular front-end library, I crafted dynamic and interactive user interfaces that delivered seamless user experiences.`
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

export default ResultsTwo
