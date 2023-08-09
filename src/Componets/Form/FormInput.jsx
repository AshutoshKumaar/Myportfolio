import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function FormInput() {

    const [data] = useTypewriter({
        words: ['Get In Touch !!', 'Contact Us !!'],
        loop: '',
        typeSpeed: 100,
        deleteSpeed: 120,
        delaySpeed: 800
    })
    return (
        <div className='p-2 md:p-5 w-full'>
            <div className='pb-5'>
                <h3 className='text-[24px] md:text-[35px] font-mono text-slate-900'>{data}  <Cursor cursorStyle='|' cursorColor='black' /></h3>
            </div>
            <div className='w-full h-auto bg-slate-900 p-2 md:p-0 shadow-md rounded-lg'>
                <form action="">
                    <div className='flex flex-col md:flex-row justify-around p-1'>
                        <div>
                            <label htmlFor="FirstName" className='text-[17px] font-bold text-slate-400'>FirstName:</label><br />
                            <input type="text" id='FirstName' placeholder='Enter Your FirstName' className='px-2 py-2 mt-1 outline-none border-[1px] border-slate-600 bg-transparent text-sm shadow-md rounded-sm w-full md:w-[200px]' />
                        </div>
                        <div>
                            <label htmlFor="LastName" className='text-[17px] font-bold text-slate-400'>LastName:</label><br />
                            <input type="text" id='LastName' placeholder='Enter Your LastName' className='px-2 py-2 mt-1 outline-none border-[1px] border-slate-600 bg-transparent text-sm shadow-md rounded-sm w-full md:w-[200px]' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around  p-1'>
                        <div>
                            <label htmlFor="Email" className='text-[17px] font-bold text-slate-400'>Email:</label><br />
                            <input type="Email" id='Email' placeholder='Enter Your Email' className='px-2 py-2 mt-1 outline-none border-[1px] border-slate-600 bg-transparent text-sm shadow-md rounded-sm w-full md:w-[200px]' />
                        </div>
                        <div>
                            <label htmlFor="Phone" className='text-[17px] font-bold text-slate-400'>Phone:</label><br />
                            <input type="number" id='Phone' placeholder='Enter Your Number' className='px-2 py-2 mt-1 outline-none border-[1px] border-slate-600 bg-transparent text-sm shadow-md rounded-sm  w-full md:w-[200px]' />
                        </div>
                    </div>
                    <div className='w-full h-[100px] px-1 md:px-16'>
                        <label htmlFor="disc" className='text-[17px] font-bold text-slate-400'>Messages:</label><br />
                        <textarea name="disc" id="disc" cols="30" rows="10" placeholder='Enter Your messages..' className='w-full h-full  px-5 py-2 mt-1 outline-none border-[1px] border-slate-600 bg-transparent text-sm shadow- rounded-md '></textarea>
                    </div>
                    <div className='py-4 text-center'>
                        <button className='mt-10 mx-auto py-2 w-[150px] md:w-[200px] bg-transparent border-[1px] border-[#d4af37] shadow-md font-semibold rounded-sm text-center hover:bg-[#d4af37] hover:text-[#000] transition ease-in-out duration-500'>Submit</button>
                    </div>

                </form>
            </div >

        </div >
    )
}

export default FormInput
