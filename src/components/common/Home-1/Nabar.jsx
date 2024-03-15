/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Section from './Section'
import Content from './Content'
// import { secondaryFont } from "../lib/fonts";

const HomeOne = () => {
    return (
        <div>
            <div className={`bg-[#28293E] h-[880px]  text-[#FFFFFF] `}>

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