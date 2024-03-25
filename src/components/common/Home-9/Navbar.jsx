/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className=''>
            {/* Mobile screen Navbar */}
            <div className='lg:hidden bg-[#28293E]   text-[#FFFFFF]  '>
                <nav className=' flex items-center justify-between py-5 mx-5'>
                    <figure className='flex items-center space-x-5'>
                        <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                        <figcaption>Agency</figcaption>
                    </figure>
                    <div className='border-1 border-[white] rounded-md p-3'>
                        <FiAlignJustify className='w-[16px]' onClick={toggleDrawer} />
                    </div>
                </nav>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className=''
                    lockBackgroundScroll={true}
                >
                    {isOpen && <div className='bg-[#28293E] min-h-screen p-5'>
                        <figure className='flex items-center space-x-5'>
                            <img src="/assets/logo.svg" alt="" className='w-[46px]' />
                            <figcaption>{`Agency`}</figcaption>
                        </figure>
                        <div className='flex flex-col text-[24px] font-semibold space-y-10 mt-10 mb-10'>
                            <p >
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
                    </div>
                    }
                </Drawer>
            </div>

            {/*  Desktop Screen Navbar */}
            < div className={`bg-[#28293E]   hidden lg:block  text-[#FFFFFF] `
            }>

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



            </ div>
        </div >
    )
}

export default Navbar