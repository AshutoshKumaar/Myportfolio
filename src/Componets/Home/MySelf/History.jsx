import React from 'react'
import Avatar from './Avatar.png'
import { HiOutlineMail } from 'react-icons/hi'
import { CiLocationOn } from 'react-icons/ci'
import { LuCalendarHeart } from 'react-icons/lu'
import { BsTelephonePlus } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import WorkExp from './WorkExp'



function History() {

    return (
        <div className='bg-[#163238] w-full h-auto p-3 md:p-10 flex flex-col md:flex-row justify-between'>
            {/* Profile Info */}
            <div className='bg-[#1e1d22] w-full md:w-1/4 h-auto  shadow-md shadow-transparent border-[1px] border-slate-600 rounded-2xl'>
                <div className='w-full h-[250px] flex flex-col justify-center items-center border-b-[1px] border-slate-700'>
                    <div className='w-[100px] h-[100px] rounded-full border-[1px] border-slate-500'>
                        <img src={Avatar} alt="errors" className='w-full h-full rounded-full' />
                    </div>
                    <div className='py-2'>
                        <h3 className='text-[25px] font-mono text-[#fafafa]'>Ashutosh Sinha</h3>
                        <p className='bg-slate-800 text-[15px] font-bold text-center text-[#d4af37] p-1 mt-3 rounded-md'>Web Developer</p>
                    </div>
                </div>
                {/* Container of Social link */}
                <div className='p-10'>
                    {/* Email */}
                    <div className='flex flex-row  my-5'>
                        <div className='w-[50px] h-[50px] border-[1px] border-slate-500 shadow-md rounded-sm px-1 py-[4px]'><HiOutlineMail className='text-[40px] font-bold leading-7 text-[#d4af37]' /></div>
                        <div className='h-[50px] ml-5'>
                            <p className='text-[17px] leading-6 font-bold text-slate-400'>Email</p>
                            <p className='text-[16px] text-slate-300'>sinhapintu545@gmail.com</p>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className='flex flex-row  my-5'>
                        <div className='w-[50px] h-[50px] border-[1px] border-slate-500 shadow-md rounded-sm px-2 py-[8px]'><BsTelephonePlus className='text-[30px] font-bold leading-7 text-[#d4af37]' /></div>
                        <div className='h-[50px] ml-5'>
                            <p className='text-[17px] leading-6 font-bold text-slate-400'>Phone</p>
                            <p className='text-[16px] text-slate-300'>+917520826924</p>
                        </div>
                    </div>
                    {/* Birthday */}
                    <div className='flex flex-row  my-5' >
                        <div className='w-[50px] h-[50px] border-[1px] border-slate-500 shadow-md rounded-sm px-2 py-[7px]'><LuCalendarHeart className='text-[30px] font-bold leading-7 text-[#d4af37]' /></div>
                        <div className='h-[50px] ml-5'>
                            <p className='text-[17px] leading-6 font-bold text-slate-400'>Birth Date</p>
                            <p className='text-[16px] text-slate-300'>18-09-1999</p>
                        </div>
                    </div>
                    {/* Location */}
                    <div className='flex flex-row'>
                        <div className='w-[50px] h-[50px] border-[1px] border-slate-500 shadow-md rounded-sm px-2 py-[7px]'><CiLocationOn className='text-[35px] font-bold leading-7 text-[#d4af37]' /></div>
                        <div className='h-[50px] ml-5'>
                            <p className='text-[17px] leading-6 font-bold text-slate-400'>Location</p>
                            <p className='text-[16px] text-slate-300'>Patna, Bihar</p>
                        </div>
                    </div>

                </div>
                {/* Social Media Integration */}
                <div className='w-full h-auto px-10 mt-14'>
                    <ul className='h-auto bg-slate-800 flex flex-row justify-around p-3  rounded-md cursor-pointer'>
                        <a href="https://www.linkedin.com/in/ashutosh-kumar-679121230/" target='_blank' rel="noreferrer">
                            <li className='p-2 bg-slate-300 rounded-full hover:bg-[#d4af37] transition ease-in-out duration-400'><AiFillLinkedin className='font-bold text-2xl text-slate-800 hover:text-[#000]' /></li>
                        </a>
                        <a href="https://github.com/AshutoshKumaar" target='_blank' rel="noreferrer" >
                            <li className='p-2 bg-slate-300 rounded-full hover:bg-[#d4af37]  transition ease-in-out duration-400'><AiFillGithub className='font-bold text-2xl text-slate-800 hover:text-[#000]' /></li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100088862662025" target='_blank' rel="noreferrer" >
                            <li className='p-2 bg-slate-300 rounded-full hover:bg-[#d4af37]  transition ease-in-out duration-400'><AiFillFacebook className='font-bold text-2xl text-slate-800 hover:text-[#000]' /></li>
                        </a>
                        <a href="https://www.instagram.com/ashutoshsinha918/" target='_blank' rel="noreferrer">
                            <li className='p-2 bg-slate-300 rounded-full hover:bg-[#d4af37]  transition ease-in-out duration-400'><AiOutlineInstagram className='font-bold text-2xl text-slate-800 hover:text-[#000]' /></li>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7wmaYXmIt1-x9UdLWXdzjg" target='_blank' rel="noreferrer">
                            <li className='p-2 bg-slate-300 rounded-full hover:bg-[#d4af37]  transition ease-in-out duration-400'><AiFillYoutube className='font-bold text-2xl text-slate-800 hover:text-[#000]' /></li>
                        </a>
                    </ul>

                </div>




            </div>
            {/* What i do ? */}
            <div className='bg-[#1e1d22] w-full md:w-3/4 h-auto  ml-0 mt-5 md:mt-0 md:ml-10 rounded-2xl border-[1px] border-slate-600'>
                <WorkExp />
            </div>


        </div>


    )
}

export default History
