import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function ResultsOne() {
    const dataResults = `From the years 2020 to 2022, I embarked on a journey of advanced technical learning at EdYoda Digital Platform. During this period, I pursued a specialized degree in the field of technology, focusing on JavaScript and becoming proficient in MERN (MongoDB, Express.js, React, Node.js) Stack development. At EdYoda Digital Platform, I engaged in an immersive learning experience that extended beyond traditional classroom settings. Through a comprehensive curriculum, I gained in-depth knowledge of JavaScript, a versatile programming language crucial for both front-end and back-end web development.`

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

export default ResultsOne
