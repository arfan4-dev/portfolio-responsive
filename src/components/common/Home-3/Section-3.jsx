/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section = () => {
    return (
        <div className=' flex flex-col-reverse items-center  mt-20 2xl:mt-40   lg:flex lg:flex-row lg:space-x-72 lg:ml-24 2xl:ml-36  lg:items-center'>

            <div className='relative mt-24 xl:mt-5 2xl:mt-20 self-start ml-10 lg:ml-0 lg:self-center py-14 lg:py-0'>
                <p className='text-[#EF6D58] text-[16px] mb-1 tracking-[2px] lg:tracking-[1px]'>Webflow Expert</p>
                <div className='text-[40px] lg:text-[72px] relative leading-[60px] lg:leading-[80px] mb-2 sm:mb-10 tracking-[2px] lg:tracking-[1px]  ' style={{ zIndex: 1 }}>
                    <p>Making Digital
                    </p>
                    <p>Products</p>
                </div>
                <div className='leading-[30px] lg:leading-[35px] text-[12px] lg:text-[14px]'>
                    <p>
                        Agency provides a full service range including technical
                    </p>
                    <p>skills, design, business understanding.</p>
                </div>

                <button className='bg-[#EF6D58] border-1 border-[#EF6D58] rounded-sm px-4 py-2 mt-5 '>
                    Explore Works
                </button>
                <button className='bg-[#28293E] text-[white] border-1 border-[#28293E] rounded-sm px-4 py-2 mx-5 mt-5 '>
                    Contact Me
                </button>
            </div>


            <div className='relative'>
                <div >
                    <img src="/assets/oval.svg" alt="" className='w-[250px] lg:w-[330px] 2xl:w-[380px]' />
                </div>
                <img src="/assets/CompositeLayer (8).png" alt="" className='absolute -top-[51px] right-[137px] lg:-top-12 lg:right-48 2xl:-top-28 2xl:right-56 w-[150px] lg:w-[206px] 2xl:w-[276px]' />
                <img src="/assets/CompositeLayer (19).png" alt="" className='absolute -top-10 right-[2rem] w-[80px] lg:w-[112px]' />
                <img src="/assets/idean.svg" alt="" className='absolute top-2 -right-[45px] xl:top-7 xl:-right-[50px] 2xl:top-2 2xl:-right-[90px] w-[60px] xl:w-[80px] 2xl:w-[112px]' />
                <img src="/assets/Bitmap (19).png" alt="" className='absolute top-24 -right-[2.5rem] xl:top-32 xl:-right-20 2xl:top-32 2xl:-right-28 w-[114px] xl:w-[150px] 2xl:w-[246px]' />
                <img src="/assets/Combined Shape.svg" alt="" className='absolute top-[9rem] right-[225px] xl:top-52 xl:right-[300px] 2xl:top-64 2xl:right-[335px] w-[70px] xl:w-[102px] 2xl:w-[152px]' />
                <img src="/assets/CompositeLayer.svg" alt="" className='absolute top-[220px] right-[130px] xl:top-[290px] xl:right-[115px] 2xl:top-[350px] 2xl:right-[215px] w-[135px] xl:w-[180px] 2xl:w-[214px]' />
                <img src="/assets/ARROW.svg" alt="" className='absolute top-[245px] right-[40px] xl:top-[310px] xl:right-[0px] 2xl:top-[430px] 2xl:right-[60px] w-[70px] lg:w-[94px]' />

            </div>
        </div>
    )
}

export default Section