/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section = () => {
    return (
        <div className='flex space-x-72 ml-36 items-center '>

            <div className='relative mt-32 '>
                <p className='text-[#EF6D58] text-[16px] mb-1'>Modern Studio</p>
                <div className='text-[72px] leading-[80px] mb-10 '>
                    <p>We’re Help</p>
                    <p>To Build Your</p>
                    <p>Dream Project</p>
                </div>
                <img className='w-[147px] absolute top-[5px] left-72 opacity-50 ' src="/assets/star.svg" alt="" />
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

                <figure className='flex items-center space-x-5 mt-28'>
                    <img src="/assets/bitmap.svg" alt="" className='w-[48px]' />
                    <div className='flex flex-col justify-start'>
                        <figcaption>&quot;Put themselves in the merchant`s shoes&quot;</figcaption>
                        <figcaption className='font-semibold'>Meta Inc.</figcaption>
                    </div>
                </figure>
            </div>


            <div className='relative w-[]'>
                <div >
                    <img src="/assets/oval.svg" alt="" className='w-[380px]' />
                </div>
                <img src="/assets/Bitmap (19).png" alt="" className='absolute -top-28 right-56 w-[276px]' />
                <img src="/assets/ovalStar.svg" alt="" className='absolute -top-10 right-12 w-[112px]' />
                <img src="/assets/idean.svg" alt="" className='absolute top-2 -right-24 w-[112px]' />
                <img src="/assets/Bitmap (19).png" alt="" className='absolute top-32 -right-28 w-[246px]' />
                <img src="/assets/Combined Shape.svg" alt="" className='absolute top-64 right-[335px] w-[152px]' />
                <img src="/assets/CompositeLayer.svg" alt="" className='absolute top-[350px] right-[215px] w-[214px]' />
                <img src="/assets/ARROW.svg" alt="" className='absolute top-[430px] right-[60px] w-[94px]' />

            </div>
        </div>
    )
}

export default Section