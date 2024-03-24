/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Content = () => {
    return (
        <div className='bg-[#FDF0E9] min-h-screen'>
            <div className='hidden sm:block bg-cover bg-center w-full h-[720px] relative ' style={{ backgroundImage: 'url(/assets/map.png)' }}>

                <div className='absolute top-40 left-40 '>
                    <div className='w-[360px] h-[464px] bg-white flex flex-col space-y-8 p-10' >

                        <p className='text-[24px] text-[#391400]'>Get In Touch</p>
                        <input type="text" placeholder='Your email' className='border-1 p-3  border-[#F3D1BF] w-[374px] h-[48px]' />
                        <input type="text" placeholder='Subject' className=' border-1 p-3 border-[#F3D1BF] w-[374px] h-[48px]' />
                        <textarea placeholder='Message' className='h-[96px]  border-1 p-3 border-[#F3D1BF] w-[374px]' />
                        <div className='flex justify-end mr-5 '>
                            <button className='bg-[#EF6D58]   border-1 border-[#EF6D58] text-[#ffff] rounded-sm w-[138px] p-2 '>
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className='absolute top-80 right-96 2xl:top-72 2xl:right-96 '>
                    <img src="/assets/pin.png" className='w-[72px]' alt="" />
                </div>
            </div>

            <div className='block sm:hidden bg-cover bg-center w-full h-[720px] relative py-10' >
                <div className='flex items-center justify-center'>
                    <div className='w-[430px] h-[464px] bg-white flex flex-col space-y-8 p-5' >

                        <p className='text-[24px] text-[#391400]'>Get In Touch</p>
                        <input type="text" placeholder='Your email' className='border-1 p-3  border-[#F3D1BF] w-[260px] lg:w-[374px] h-[48px]' />
                        <input type="text" placeholder='Subject' className=' border-1 p-3 border-[#F3D1BF] w-[260px] lg:w-[374px] h-[48px]' />
                        <textarea placeholder='Message' className='h-[96px]  border-1 p-3 border-[#F3D1BF] w-[260px] lg:w-[374px]' />
                        <div className='flex justify-end mr-5 '>
                            <button className='bg-[#EF6D58]   border-1 border-[#EF6D58] text-[#ffff] rounded-sm w-[138px] p-2 '>
                                Submit Now
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            <div className='block sm:hidden  bg-cover bg-center w-[100%] h-[720px] relative mt-0' style={{ backgroundImage: 'url(/assets/map.png)' }}>

                <div className='absolute top-72 right-36 '>
                    <img src="/assets/pin.png" className='w-[72px]' alt="" />
                </div>
            </div> {/**/}


            <div className='flex justify-center  2xl:mt-0 py-10  xl:py-10 bg-[#FDF0E9]'>
                <div className='text-[#391400] text-[16px]  flex flex-col lg:flex-row'>
                    <div className='w-[300px] xl:w-[391px] xl:h-[126px] space-y-2  border-1  border-[#F3D1BF]  p-10 lg:p-4  '>
                        <div className='text-[#391400] flex items-center  space-x-5'>
                            <img src="/assets/CompositeLayer (18).png" alt="" className='lg:w-[60px] 2xl:w-[80px]' />
                            <div className=''>
                                <p className=' text-[16px] text-[#EF6D58]'>Phone</p>

                            </div>
                        </div>
                        <p className='text-[20px]'>+1 (234) 567-89-00</p>


                    </div>
                    <div className='w-[300px] xl:w-[391px] xl:h-[126px] text-[16px] text-[#0e0d0c] space-y-2   border-1  border-[#F3D1BF]  p-10 lg:p-4'>
                        <div className=' flex items-center  space-x-5'>
                            <img src="/assets/CompositeLayer (17).png" alt="" className=' lg:w-[60px] 2xl:w-[80px]' />
                            <div>
                                <p className='text-[16px] text-[#EF6D58]'>Email</p>

                            </div>

                        </div>
                        <p className='text-[20px]'>info@agency.com</p>
                    </div>
                    <div className=' w-[300px] xl:w-[391px] xl:h-[126px] text-[16px] text-[#0e0d0c] space-y-2   border-1  border-[#F3D1BF] p-10 lg:p-4'>
                        <div className=' flex items-center  space-x-5'>
                            <img src="/assets/CompositeLayer (16).png" alt="" className=' lg:w-[60px] 2xl:w-[80px]' />
                            <div>
                                <p className='text-[16px] text-[#EF6D58]'>Address</p>
                            </div>

                        </div>
                        <p>+1 (234) 567-89-00</p>
                    </div>




                </div>


            </div>

            <div className='flex flex-col lg:flex-row justify-evenly  py-10 '>
                <div className='text-[16px] text-[#391400] space-y-7 ml-8 lg:ml-0'>
                    <div className='text-[50px] lg:text-[40px] font-semibold text-[#391400] lg:leading-[50px]'>
                        <p className='text-[20px]  font-normal lg:text-[16px] text-[#EF6D58] mb-5 tracking-[1.5px]'>Faq</p>
                        <p>Frequently Asked </p>
                        <p>Questions</p>
                    </div>
                    <p>A digital agency is a business you hire to outsource your</p>
                    <p>digital marketing efforts, instead of handling in-house.</p>
                    <p className='font-semibold'>Contact Us</p>

                </div>
                <div className='self-center mt-20 lg:self-start'>
                    <div className='w-[343px] h-[363px] lg:w-[570px] lg:h-[273px] text-[14px] lg:text-[16px]  py-5 px-10 bg-[#FFFFFF]'>
                        <div className='text-[#391400]  flex justify-between items-center py-5  text-[24px]'>
                            <p>A digital agency is a business</p>
                            <img src="/assets/up.png" alt="" className='w-[32px]' />
                        </div>
                        <div className='space-y-3'>
                            <p>Digital marketing efforts, instead of handling in-house. They</p>
                            <p>can provide your business with a variety of digital solutions</p>
                            <p>to promote your product or service online and help you hit</p>
                            <p>your marketing goals and grow your business.</p>
                        </div>
                    </div>
                    <div className='w-[343px] lg:w-[570px] self-center lg:self-start h-[113px] flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                        <p className='text-[18px] lg:text-[24px] text-[#391400]'>Hire to outsource your digital</p>
                        <img src="/assets/down.png" className='w-[32px]' alt="" />
                    </div>
                    <div className='w-[343px] lg:w-[570px] h-[113px] self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                        <p className='text-[18px] lg:text-[24px] text-[#391400]'>Marketing efforts</p>
                        <img src="/assets/down.png" className='w-[32px]' alt="" />
                    </div>
                    <div className='w-[343px] lg:w-[570px] h-[113px] self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                        <p className='text-[18px] lg:text-[24px] text-[#391400]'>Can provide your business</p>
                        <img src="/assets/down.png" className='w-[32px]' alt="" />
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