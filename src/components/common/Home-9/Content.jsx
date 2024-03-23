/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Content = () => {
    return (
        <div className='bg-[#FDF0E9] min-h-screen'>
            <div className='flex items-center justify-center flex-col space-y-10 py-10'>
                <div className=' flex items-center w-[570px] space-x-5'>
                    <img src="/assets/arrow.png" alt="" />
                    <p className='text-[#391400] text-[16px]'>Back to portfolio</p>
                </div>

                <div className='w-[570px] leading-[5rem]'>
                    <p className='text-[#391400] text-[72px]'>Work Media Project</p>
                </div>


                <div className='w-[570px]'>
                    <p className='text-[20px] text-[#391400]'>Agency provides a full service range including technical skills, design, business understanding.</p>
                </div>

                <div className='w-[570px]'>
                    <p className='text-[16px] text-[#391400] opacity-50 '>Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                </div>


                <div className='flex space-x-32 w-[570px]'>
                    <div className='text-[16px]'>
                        <p className='text-[#EF6D58] '>Category</p>
                        <div className=''>
                            <p>Art Direction</p>
                            <p>User Interface</p>
                            <p>Branding Strategy</p>
                            <p>Print Design </p>
                            <p>3D Render</p>
                        </div>
                    </div>

                    <div className='space-y-10'>
                        <div className=''>
                            <p className='text-[#EF6D58] '>Client</p>
                            <img src="/assets/sign2.png" alt="" />
                        </div>
                        <div>
                            <p className='text-[#ef6d58]'>Date</p>
                            <p className='text-[20px] text-[#391400]'>Dec 2021</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="/assets/Bitmap (51).png" alt="" className='xl:w-[1170px] xl:h-[726px]' />
                </div>


                <div className='text-[16px] w-[570px] space-y-10'>
                    <div className='text-[40px] text-[#391400]'>
                        <p>Problem</p>
                    </div>
                    <div>
                        <p>Ability to put themselves in the merchant`s shoes. It is meant to partner on the long run, and work as an extension of the merchant`s team.</p>
                    </div>
                    <div>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-center xl:space-x-5 py-20'>
                    <div>
                        <img src="/assets/CompositeLayer (20).png" alt="" className='w-[329px] h-[259px] xl:w-[570px] xl:h-[454px]' />
                    </div>
                    <div className='space-x-3 xl:space-x-0  mt-3 lg:mt-0 xl:space-y-8 flex lg:flex lg:flex-col lg:items-center'>
                        <img src="/assets/Bitmap (52).png" alt="" className='w-[156px] h-[120px] xl:w-[270px] xl:h-[208px]' />
                        <img src="/assets/Bitmap (53).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                    </div>
                    <div className='space-x-3 xl:space-x-2 mt-3 lg:mt-0  xl:space-y-8 flex lg:flex lg:flex-col lg:items-center'>
                        <img src="/assets/Bitmap (54).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                        <img src="/assets/Bitmap (55).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                    </div>
                </div>
                <div className='text-[16px] w-[570px] space-y-10'>
                    <div className='text-[40px] text-[#391400]'>
                        <p>Solution</p>
                    </div>
                    <div>
                        <p>Put themselves in the merchant`s shoes. It is meant to partner on the long run, and work as an extension of the merchant`s team. </p>
                    </div>
                    <div>
                        <p> Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                    </div>
                </div>

                <div>
                    <p className='text-[#391400]'>Share on</p>
                </div>

            </div>

        </div>
    )
}

export default Content