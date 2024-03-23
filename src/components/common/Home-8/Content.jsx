/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Content = () => {
    return (
        <div className='bg-[#FDF0E9] min-h-screen'>
            <div className='flex flex-col items-center justify-center py-10'>

                <div className=' text-[16px] text-[#391400] hidden lg:flex space-x-10'>
                    <p >Show All   <sup>14</sup></p>
                    <p>Design <sup>6</sup></p>
                    <p>Branding <sup>4</sup></p>
                    <p>Illustration <sup>3</sup></p>
                    <p>Motion <sup>1</sup></p>
                </div>

                <div className='lg:hidden'>
                    <input type="text" className='w-[329px] p-4 rounded-lg' placeholder='Show All' />
                </div>

            </div>

            <div className='hidden lg:block lg:space-y-5'>




                <div className='flex items-center justify-center space-x-5'>
                    <div className='relative'>
                        <img src="/assets/Bitmap (3).png" alt="" className='w-[323px] lg:w-[370px] h-[416px] ' />
                        <div className='absolute  bottom-[13px] left-[1.5rem] lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Design</button>
                            <p className='text-[#ffff] text-[40px]'>SOFA</p>
                        </div>
                    </div>
                    <div className='relative '>
                        <img src="/assets/Bitmap (4).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px] lg:h-[416px] ' />
                        <div className='absolute bottom-[13px] left-[1.5rem]  lg:bottom-[20px] lg:left-[2rem] 2xl:left-[2rem] '>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                            <p className='text-[#ffff] text-[40px]'>KeyBoard</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/assets/Bitmap (5).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px]' />
                        <div className='absolute  bottom-[13px] left-[1.5rem]   lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Illustration</button>
                            <p className='text-[#ffff] text-[40px]'>Work Media</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center space-x-5'>
                    <div className='relative'>
                        <img src="/assets/Bitmap (15).png" alt="" className='w-[323px] lg:w-[370px] h-[416px] ' />
                        <div className='absolute  bottom-[13px] left-[1.5rem] lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Motion</button>
                            <p className='text-[#ffff] text-[40px]'>DDone</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src="/assets/Bitmap (42).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px]' />
                        <div className='absolute  bottom-[13px] left-[1.5rem]   lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Design</button>
                            <p className='text-[#ffff] text-[40px]'>Abstraction</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/assets/Bitmap (43).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px]' />
                        <div className='absolute  bottom-[13px] left-[1.5rem]   lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                            <p className='text-[#ffff] text-[40px]'>HandP</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center space-x-5'>
                    <div className='relative'>
                        <img src="/assets/Bitmap (48).png" alt="" className='w-[323px] lg:w-[370px] h-[416px] ' />
                        <div className='absolute  bottom-[13px] left-[1.5rem] lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Motion</button>
                            <p className='text-[#ffff] text-[40px]'>Architect</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src="/assets/Bitmap (49).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px]' />
                        <div className='absolute  bottom-[13px] left-[1.5rem]   lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Design</button>
                            <p className='text-[#ffff] text-[40px]'>CalC</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/assets/Bitmap (50).png" alt="" className=' w-[323px] lg:w-[370px] h-[416px]' />
                        <div className='absolute  bottom-[13px] left-[1.5rem]   lg:bottom-[20px] lg:left-[2rem]'>
                            <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                            <p className='text-[#ffff] text-[40px]'>Sport</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 relative'>


                <div className='relative'>
                    <img src="/assets/Bitmap (4).png" alt="" className=' w-[323px] lg:w-[670px] h-[416px]' />
                    <div className='absolute bottom-[13px] left-[1.5rem]   xl:top-72 xl:left-[580px] 2xl:bottom-10 2xl:left-[700px]'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>KeyBoard</p>
                    </div>
                </div>

                <div className='relative'>
                    <img src="/assets/Bitmap (3).png" alt="" className='w-[323px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Design</button>
                        <p className='text-[#ffff] text-[40px]'>SOFA</p>
                    </div>
                </div>

                <div className='relative'>
                    <img src="/assets/Bitmap (4).png" alt="" className=' w-[323px] lg:w-[670px] h-[416px]' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]   xl:top-72 xl:left-[580px] 2xl:bottom-10 2xl:left-[700px]'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>DDDone</p>
                    </div>
                </div>

                <div className='relative'>
                    <img src="/assets/Bitmap (15).png" alt="" className=' w-[323px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Illustration</button>
                        <p className='text-[#ffff] text-[40px]'>Working Media</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/assets/Bitmap (43).png" alt="" className=' w-[323px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>HandP</p>
                    </div>
                </div>







                <div className='relative'>
                    <img src="/assets/Bitmap (48).png" alt="" className=' w-[323px] lg:w-[670px] h-[416px]' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]   xl:top-72 xl:left-[580px] 2xl:bottom-10 2xl:left-[700px]'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>DDDone</p>
                    </div>
                </div>

                <div className='relative'>
                    <img src="/assets/Bitmap (49).png" alt="" className=' w-[323px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Illustration</button>
                        <p className='text-[#ffff] text-[40px]'>Working Media</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/assets/Bitmap (50).png" alt="" className=' w-[323px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute  bottom-[13px] left-[1.5rem]  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>HandP</p>
                    </div>
                </div>
            </div>


            <div className='flex items-center justify-center'>
                <button className='bg-[#ffff]  border-1 border-[#ffff] text-[#391400] rounded-sm px-4 py-3 mt-5 '>
                    Learn More
                </button>
            </div>



            <div className='relative  '>


                <div className='relative  flex justify-center items-center mt-10 '>
                    <div className='bg-[#EF6D58] xl:h-[500px] 2xl:h-[600px] w-[90%] ml-0 lg:ml-0  lg:h-[442px] flex flex-col-reverse lg:flex-row items-center justify-around py-20 lg:py-0'>

                        <div className=' space-y-10 mt-10 lg:mt-0 px-5'>
                            <div className=' text-[40px] 2xl:text-[56px] text-[#ffff]'>
                                <p> Help To Build</p>
                                <p> Your Dream Project</p>
                            </div>

                            <div className='text-[12px] lg:text-[16px] text-[#ffff]'>
                                <p>A digital agency is a business you hire to outsource your</p>
                                <p>digital marketing efforts, instead of handling in-house.</p>
                            </div>

                            <button className='bg-[#ffff] text-[#391400] border-1 border-[#ffff] rounded-sm w-[118px] p-2 2xl:p-3 '>
                                Contact Now
                            </button>
                        </div>

                        <div className='relative'>
                            <div >
                                <img src="/assets/oval (5).png" alt="" className='w-[215px] lg:w-[318px] mt-10 lg:mt-0' />
                            </div>
                            <img src="/assets/CompositeLayer (9).png" alt="" className='absolute -top-[2rem] right-[10.3rem] lg:-top-14 lg:right-56 2xl:-top-28 2xl:right-56 w-[95px] xl:w-[120px] 2xl:w-[176px]' style={{ zIndex: '1' }} />
                            <img src="/assets/Combined Shape (3).png" alt="" className='absolute top-[1.5rem] right-[8rem] xl:-top-0 xl:right-40 2xl:top-10 2xl:right-40 h-[95px] xl:w-[120px] 2xl:w-[100px]' />

                            <img src="/assets/Bitmap-24.png" alt="" className='absolute -top-0 -right-8 lg:-top-10 lg:-right-14 w-[148px] h-[190px] lg:w-[246px] lg:h-[305px]' />
                            <img src="/assets/block (3).png" alt="" className='absolute top-[105px] right-[105px] lg:top-[120px] lg:right-[170px] w-[108px] h-[60px] lg:w-[214px] lg:h-[112px]' />
                            <img src="/assets/ARROW.svg" alt="" className='absolute top-[170px] right-[97px] lg:top-[230px] opacity-50 lg:right-[140px] w-[78px] lg:w-[94px]' />

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-evenly items-center    lg:items-baseline space-y-10 lg:space-y-0  mt-20'>
                <div className=''>
                    <p className='text-[24px] text-[#391400] '>Agency</p>
                </div>

                <div className='text-[20px] flex flex-col items-center lg:block lg:text-[16px]   space-y-3 text-[#391400]'>
                    <p className='text-[#EF6D58] '>Menu</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>

                <div className='text-[20px] lg:text-[16px] flex flex-col items-center lg:block space-y-3 text-[#391400]'>
                    <p className='text-[#EF6D58]'>Service</p>
                    <p>Design</p>
                    <p>Development</p>
                    <p>Marketing</p>
                    <p>See More</p>
                </div>

                <div className='flex space-x-5 items-center lg:self-start'>
                    <img src="/assets/CompositeLayer (10).png" className='w-[48px]' alt="" />
                    <img src="/assets/CompositeLayer (11).png" className='w-[48px]' alt="" />
                    <img src="/assets/CompositeLayer (12).png" className='w-[48px]' alt="" />
                </div>
            </div>




            <div className='flex flex-col lg:flex-row justify-between items-center py-10'>

                <div className='w-[100%] flex items-center justify-center space-x-1 mt-10'>
                    <p>Copyright © 2022 Laaqiq.</p>
                    <p>All Rights Reserved.</p>
                </div>
                <div className='w-[100%] flex items-center justify-center space-x-5 mt-10'>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Content