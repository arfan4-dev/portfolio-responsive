/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Section from './Section'
// import { secondaryFont } from "../lib/fonts";
import { FiAlignJustify } from "react-icons/fi";
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Link from 'next/link';
const Navbar = ({ brand }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className=''>
            <div className='lg:hidden bg-[#28293E] h-[1104px] w-[140%] lg:w-[135%] text-[#FFFFFF] pb-5'>
                <nav className=' flex items-center justify-between py-5 mx-5'>
                    <figure className='flex items-center space-x-5'>
                        <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                        <figcaption>{`Agency`}</figcaption>
                    </figure>
                    <div className='border-1 border-[white] rounded-md p-3'>
                        <FiAlignJustify className='w-[16px]' onClick={toggleDrawer} />
                    </div>
                </nav>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bg-[#28293E]'
                    lockBackgroundScroll={true}
                    style={{ height: '100%', backgroundColor: '#28293E' }}

                >
                    {isOpen && <div className='bg-[#28293E] min-h-screen p-5'>
                        <figure className='flex items-center space-x-5'>
                            <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                            <figcaption>{`Agency`}</figcaption>
                        </figure>
                        <div className='flex flex-col text-[24px] font-semibold space-y-10 mt-10 mb-10'>
                            <p >
                                <Link href='/Home-4'>About</Link>
                            </p>
                            <p>
                                <Link href='/Home-6'>
                                    Service
                                </Link>

                            </p>
                            <p>
                                Pricing
                            </p>
                            <Link href='/Home-10'>
                                Blog
                            </Link>
                        </div>

                        <button className='border-1 border-white rounded-sm  px-6 py-1.5'>
                            <Link href='/Home-12'>
                                Contact
                            </Link>

                        </button>
                    </div>
                    }
                </Drawer>
                <Section />

            </div>
            <div className={`bg-[#28293E] h-[880px] hidden lg:block text-[#FFFFFF] `}>

                <nav className='flex items-center justify-around py-5'>
                    <figure className='flex items-center space-x-5'>
                        <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                        <figcaption>{'Agency'}</figcaption>
                    </figure>
                    <div className='flex items-center space-x-24'>
                        <p>
                            <Link href='/Home-4'>About</Link>

                        </p>
                        <p>
                            <Link href='/Home-6'>
                                Service
                            </Link>
                        </p>
                        <p>
                            Pricing
                        </p>
                        <p>
                            <Link href='/Home-10'>
                                Blog
                            </Link>
                        </p>
                    </div>

                    <button className='border-1 border-white rounded-sm  px-6 py-1.5'>
                        <Link href='/Home-12'>
                            Contact
                        </Link>
                    </button>

                </nav>


                <Section />
            </div>
        </div>
    )
}

export default Navbar