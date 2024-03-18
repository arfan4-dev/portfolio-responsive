/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Section from './Section'
import Content from './Content'
// import { secondaryFont } from "../lib/fonts";
import { FiAlignJustify } from "react-icons/fi";
const HomeOne = () => {
    return (
        <div className=''>
            <div className='lg:hidden bg-[#28293E] h-[1104px] w-[135%] text-[#FFFFFF] '>
                <nav className=' flex items-center justify-between py-5 mx-5'>
                    <figure className='flex items-center space-x-5'>
                        <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                        <figcaption>Agency</figcaption>
                    </figure>
                    <div className='border-1 border-[white] rounded-md p-3'>
                        <FiAlignJustify className='w-[16px]' />
                    </div>
                </nav>
                <Section />

            </div>
            <div className={`bg-[#28293E] h-[880px] hidden lg:block text-[#FFFFFF] `}>

                <nav className='flex items-center justify-around py-5'>
                    <figure className='flex items-center space-x-5'>
                        <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                        <figcaption>Agency</figcaption>
                    </figure>
                    <div className='flex items-center space-x-24'>
                        <p>
                            About
                        </p>
                        <p>
                            Service
                        </p>
                        <p>
                            Pricing
                        </p>
                        <p>
                            Blog
                        </p>
                    </div>

                    <button className='border-1 border-white rounded-sm  px-6 py-1.5'>
                        Contact
                    </button>

                </nav>


                <Section />
            </div>
        </div>
    )
}

export default HomeOne