/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section = () => {
    return (
        <div className='flex flex-col-reverse items-center mt-20 lg:flex lg:flex-row lg:space-x-72 lg:ml-24 2xl:ml-36  lg:items-center'>

            <div className='relative mt-24 xl:mt-5 2xl:mt-32  '>
                <p className='text-[#EF6D58] text-[16px] mb-1 tracking-[2px] lg:tracking-[1px]'>Modern Studio</p>
                <div className='text-[60px] lg:text-[72px] relative leading-[80px] mb-2 sm:mb-10 tracking-[2px] lg:tracking-[1px]  ' style={{ zIndex: 1 }}>
                    <p>We’re Help</p>
                    <p>To Build Your</p>
                    <p>Dream Project</p>
                </div>
                <img className='hidden sm:block w-[147px] absolute top-[5px] left-72 opacity-50 ' src="/assets/star.svg" alt="" />
                <div className='leading-[35px]'>
                    <p>
                        Agency provides a full service range including technical
                    </p>
                    <p>skills, design, business understanding.</p>
                </div>

                <button className='bg-[#EF6D58] border-1 border-[#EF6D58] rounded-sm px-4 py-3 mt-5 '>
                    How We Work
                </button>
                <button className='bg-[#28293E] border-1 border-[#28293E] rounded-sm px-4 py-3 ml-10'>
                    Contact Us
                </button>

                <figure className='flex items-start lg:items-center space-x-5 mt-10 sm:mt-28 '>
                    <img src="/assets/Bitmap (24).png" alt="" className='w-[48px]' />
                    <div className='flex flex-col justify-start w-[50%] lg:w-[100%]'>
                        <figcaption>&quot;Put themselves in the merchant`s shoes&quot;</figcaption>
                        <figcaption className='font-semibold'>Meta Inc.</figcaption>
                    </div>
                </figure>
            </div>


            <div className='relative w-[]'>
                <div >
                    <img src="/assets/oval.svg" alt="" className='w-[280px] lg:w-[330px] 2xl:w-[380px]' />
                </div>
                <img src="/assets/CompositeLayer (8).png" alt="" className='absolute -top-20 right-40 lg:-top-12 lg:right-48 2xl:-top-28 2xl:right-56 w-[200px] lg:w-[206px] 2xl:w-[276px]' />
                <img src="/assets/ovalStar.svg" alt="" className='absolute -top-10 right-12 w-[80px] lg:w-[112px]' />
                <img src="/assets/idean.svg" alt="" className='absolute top-2 -right-[90px] xl:top-7 xl:-right-[50px] 2xl:top-2 2xl:-right-[90px] w-[80px] 2xl:w-[112px]' />
                <img src="/assets/Bitmap (19).png" alt="" className='absolute top-24 -right-16 xl:top-32 xl:-right-20 2xl:top-32 2xl:-right-28 w-[160px] xl:w-[150px] 2xl:w-[246px]' />
                <img src="/assets/Combined Shape.svg" alt="" className='absolute top-40 right-[250px] xl:top-52 xl:right-[300px] 2xl:top-64 2xl:right-[335px] w-[100px] xl:w-[102px] 2xl:w-[152px]' />
                <img src="/assets/CompositeLayer.svg" alt="" className='absolute top-[250px] right-[130px] xl:top-[290px] xl:right-[115px] 2xl:top-[350px] 2xl:right-[215px] w-[150px] xl:w-[180px] 2xl:w-[214px]' />
                <img src="/assets/ARROW.svg" alt="" className='absolute top-[290px] right-[40px] xl:top-[310px] xl:right-[0px] 2xl:top-[430px] 2xl:right-[60px] w-[70px] lg:w-[94px]' />

            </div>
        </div>
    )
}

export default Section