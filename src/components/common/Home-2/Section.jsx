/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section = () => {
    return (
        <div className='flex flex-col-reverse items-center mt-20 2xl:mt-32  lg:flex lg:flex-row lg:space-x-72 lg:ml-24 2xl:ml-36  lg:items-center'>

            <div className='relative mt-24 xl:mt-5 2xl:mt-20  '>
                <p className='text-[#EF6D58] text-[16px] mb-1 tracking-[2px] lg:tracking-[1px]'>Gabriel Pires</p>
                <div className='text-[60px] lg:text-[72px] relative leading-[80px] mb-2 sm:mb-10 tracking-[2px] lg:tracking-[1px]  ' style={{ zIndex: 1 }}>
                    <p>The Simple,</p>
                    <p>Clean Design</p>
                </div>
                <div className='leading-[35px]'>
                    <p>
                        Agency provides a full service range including technical
                    </p>
                    <p>skills, design, business understanding.</p>
                </div>

                <button className='bg-[#EF6D58] border-1 border-[#EF6D58] rounded-sm px-4 py-3 mt-5 '>
                    See My Works
                </button>
            </div>


            <div className='relative'>
                <div >
                    <img src="/assets/oval.svg" alt="" className='w-[280px] lg:w-[330px] 2xl:w-[380px]' />
                </div>

                <img src="/assets/CompositeLayer (13).png" alt="" className='absolute xl:-top-16 xl:right-[230px] 2xl:-top-32 2xl:right-[250px] w-[80px] xl:w-[112px] 2xl:w-[226px]' style={{ zIndex: '1' }} />
                <img src="/assets/Bitmap (25).png" alt="" className='absolute top-24 -right-16 xl:-top-12 xl:-right-20 2xl:-top-20 2xl:-right-20 w-[160px] xl:w-[250px] 2xl:w-[316px]' style={{ zIndex: '1' }} />
                <img src="/assets/CompositeLayer.svg" alt="" className='absolute top-[250px] right-[130px] xl:top-[130px] xl:right-[140px] 2xl:top-[160px] 2xl:right-[210px] w-[150px] xl:w-[180px] 2xl:w-[214px]' style={{ zIndex: '1' }} />
                <img src="/assets/Combined Shape (3).png" alt="" className='absolute top-[250px] right-[130px] xl:-top-[20px] xl:right-[165px] 2xl:-top-[10px] 2xl:right-[215px] w-[150px] xl:w-[120px] 2xl:w-[129px]' />

                <img src="/assets/ARROW.svg" alt="" className='absolute top-[290px] right-[40px] xl:top-[220px] xl:right-[140px] 2xl:top-[280px] 2xl:right-[200px] w-[70px] lg:w-[94px]' />

            </div>
        </div>
    )
}

export default Section