/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

const Content = () => {
    const swiperRef = useRef(null);
    // const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState();
    const [slideView, setSlideView] = useState(4)
    const [spaceBetween, setSpaceBetween] = useState(20)
    const [isOpen, setIsOpen] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false
    });

    const clickOpener = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }
    const handleBackClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleForwardClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (width < 640) {
            setSlideView(1.3);
            setSpaceBetween(5)

        } else {
            setSlideView(4);
            setSpaceBetween(20)
        }
    }, [width]);
    return (
        <div className='bg-[#FDF0E9] h-[100%] w-[140%] lg:w-full py-10 overflow-x-hidden'>
            <div className='grid grid-cols-2 grid-rows-2 justify-items-center place-items-center gap-10 lg:flex lg:items-center lg:justify-around'>
                <img src="/assets/sign1.png" alt="" className='w-[147px]' />
                <img src="/assets/sign2.png" alt="" className='w-[108px]' />
                <img src="/assets/sign3.png" alt="" className='w-[119px]' />
                <img src="/assets/sign4.png" alt="" className='w-[86px]' />
                <img src="/assets/sign5.png" alt="" className='w-[126px] hidden lg:block' />
            </div>
            <div className='flex items-center justify-center lg:hidden mt-10 '>
                <img src="/assets/sign5.png" alt="" className='w-[126px] ' />
            </div>

            <div className='flex flex-col items-center lg:flex-row relative justify-center  xl:space-x-28 mt-40  2xl:mt-72 '>
                <div className='2xl:mt-16 ' >
                    <img src="/assets/Bitmap.png" alt="" className='relative w-[350px] xl:w-[320px] 2xl:w-[470px] ml-24 xl:-ml-16 2xl:ml-24 xl:-mt-32 2xl:-mt-12 lg:mt-0 lg:ml-0 ' style={{ zIndex: '1' }} />
                    <img src="/assets/Rectangle.svg" alt="" className='w-[310px] xl:w-[250px] 2xl:w-[384px] absolute -top-24 left-24 xl:-top-10 xl:left-44 2xl:-top-20 2xl:left-60 opacity-100' />
                    <img src="/assets/Path.svg" alt="" className='w-[150px] xl:w-[100px] 2xl:w-[193px] absolute -top-16 left-14 xl:top-10 xl:left-36 2xl:-top-10 2xl:left-44' />
                    <img src="/assets/block.png" alt="" className='w-[236px] xl:w-[200px] 2xl:w-[236px] absolute -top-24 left-[250px] xl:-top-10 xl:left-[290px]  2xl:-top-10 2xl:left-[480px] ' style={{ zIndex: '1 ' }} />
                    <img src="/assets/Combined Shape (1).svg" alt="" className='w-[130px] xl:w-[130px] 2xl:w-[193px] absolute -top-28 left-[340px]  xl:-top-[60px] xl:left-[360px]  2xl:-top-20 2xl:left-[550px]' />
                    <img src="/assets/CompositeLayer.png" alt="" className='w-[160px] xl:w-[120px] 2xl:w-[219px] absolute bottom-[470px] left-[40px] xl:bottom-32 xl:left-[170px] 2xl:-bottom-28 2xl:left-[170px]' style={{ zIndex: '1' }} />

                </div>

                <div className='text-[#391400] mt-40 xl:mt-0 2xl:mt-20 '>
                    <p className='text-[#EF6D58] text-[16px]'>About</p>
                    <p className='text-[40px] lg:text-[56px]'>An Experience </p>
                    <p className='text-[56px]'>Design Agency</p>
                    <p className='text-[20px] text-[#391400]'>Provides a full service range</p>
                    <div className='leading-[40px]'>
                        <p className='text-[#bea89c] text-[16px]'>Ability to put themselves in the merchant`s shoes. It is
                        </p>
                        <p className='text-[#bea89c] text-[16px]'>meant to partner on the long run, and work as an extension</p>
                        <p className='text-[#bea89c] text-[16px]'> of the merchant`s team.</p>
                    </div>
                    <button className='bg-[#ffff] border-1 border-[#ffff] rounded-sm px-7 py-3 mt-5 '>
                        About Us
                    </button>
                </div>
            </div>

            <div className='flex flex-row justify-center mt-40'>
                <div className='text-[#391400] flex flex-col lg:flex-row'>
                    <div className='w-[391px] border-1  border-[#391400] p-10'>
                        <p className=' text-[40px]  '>42% </p>
                        <p className='text-[20px]'>Years of experience </p>
                    </div>

                    <div className='w-[391px] border-1  border-[#391400] p-10'>
                        <p className=' text-[40px]'>73+ </p>
                        <p className='text-[20px]'>Agency members</p>
                    </div>


                    <div className='w-[391px] border-1  border-[#391400] p-10'>
                        <p className=' text-[40px] '>5.000</p>
                        <p className='text-[20px]'>Projects complete</p>
                    </div>


                </div>
            </div>


            <div className='flex flex-col items-center lg:flex-row   justify-around mt-32'>
                <div className='text-[#391400]  text-[16px] '>
                    <p className='text-[#EF6D58]'>How we work
                    </p>
                    <p className='text-[40px]'>
                        Making Your Projects
                    </p>
                    <p className='text-[40px]'>
                        Look Awesome
                    </p>

                    <p className='leading-[40px]'>Technical skills, design, business understanding, ability to </p>
                    <p >put themselves in the merchant`s shoes.</p>
                    <p className='mt-10'>Read More</p>
                </div>

                <div className='text-[#391400] mt-12 font-semibold lg:font-normal'>
                    <div className='text-[24px] flex items-center space-x-10'>
                        <p className='text-[72px]'>1</p>
                        <p >Full service range including</p>
                    </div>
                    <div className='text-[24px] flex items-center space-x-10'>
                        <p className='text-[72px]'>2</p>
                        <p >Technical skills, design, business</p>
                    </div>
                    <div className='text-[24px] flex items-center space-x-10'>
                        <p className='text-[72px]'>3</p>
                        <p >Themselves in the merchant`s
                        </p>
                    </div>
                </div>
            </div>



            <div className='flex flex-col lg:flex-row items-center justify-around mt-20'>


                <div>
                    <img src="/assets/mount-play.png" alt="" className='w-[400px] lg:w-[570px]' />
                </div>

                <div className='font-semibold lg:font-normal mt-10'>
                    <p className='text-[#EF6D58] text-[16px] font-normal'>Video Reel</p>
                    <p className='text-[40px] text-[#391400] '>Unlock The Greatest </p>
                    <p className='text-[40px] text-[#391400] '>Value Possible</p>
                    <p>Design, business understanding, ability to put themselves</p>
                    <p> in the merchant`s shoes meant to partner.</p>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-around mt-20'>
                <div className='self-start ml-10 space-y-5 lg:ml-0'>
                    <p className='text-[#EF6D58] text-[20px]'>Features
                    </p>
                    <p className='text-[56px] text-[#391400]'>Give Your Site  </p>
                    <p className='text-[56px] text-[#391400]'> A New Look </p>
                    <p> Service range including technical skills, design,</p>
                    <p> business understanding.</p>

                    <div className='flex items-center space-x-3'>
                        <img src="/assets/check.png" alt="" className='w-[32px]' />
                        <p className='text-[16px]'>Range including technical skills</p>
                    </div>

                    <div className='flex items-center space-x-3 my-3'>
                        <img src="/assets/check.png" alt="" className='w-[32px]' />
                        <p className='text-[16px]'>Business understanding</p>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <img src="/assets/check.png" alt="" className='w-[32px]' />
                        <p className='text-[16px]'>Partner on the long run</p>
                    </div>
                </div>


                <div className='mt-24 mb-32  lg:mb-0 relative self-center'>
                    <img src="/assets/Bitmap (1).png" alt="" className='relative w-[350px] lg:w-[470px] mt-14 ' style={{ zIndex: 1 }} />
                    <img src="/assets/CompositeLayer (1).png" alt="" className='w-[130px] lg:w-[184px] absolute -top-10 lg:-top-20 left-10' style={{ zIndex: 1 }} />
                    <img src="/assets/Rectangle (1).png" alt="" className='w-[447px] absolute -top-10 right-10 lg:right-20' />
                    <img src="/assets/Combined Shape.png" alt="" className='w-[261px] absolute -top-24 right-7' />
                    <img src="/assets/Rectangle.png" alt="" className='w-[250px] lg:w-[360px] absolute top-[150px] right-5  lg:top-32 lg:right-0' />
                    <img src="/assets/Path.png" alt="" className='w-[160px] lg:w-[215px] absolute top-64 -left-10 lg:-left-12' />

                </div>

            </div> {/**/}



            <div className='flex flex-col space-y-10 lg:flex-row justify-around  mt-64 items-center tracking-[1px]'>
                <div className='text-[#391400] text-[20px]  '>
                    <p className='text-[#EF6D58] text-[16px] mb-8 tracking-[1.5px]'>Features</p>
                    <p>Long run, and work as an extension  </p>
                    <p className='mb-8'>of the merchant`s team.</p>
                    <p className='text-[16px]'>Read More</p>
                </div>

                <div className='flex flex-col lg:flex-row items-end'>
                    <div className='bg-white w-[336px] h-[336px] rounded-lg text-[16px] flex flex-col p-10 space-y-1'>
                        <img src="/assets/CompositeLayer (2).png" alt="" className='w-[80px] mb-5' />
                        <p className='text-[24px] text-[#391400]'>Professional</p>
                        <p className='leading-[40px]'>Full service range including </p>
                        <p>technical skills, design.</p>
                    </div>
                    <div className='border-1 border-[#f3d1bf] w-[336px] h-[272px] py-20 px-10 rounded-lg text-[16px] flex flex-col space-y-1'>
                        <p className='text-[24px] text-[#391400]'>Accessibility</p>
                        <p className='leading-[40px]'>Business understanding, </p>
                        <p>ability to put themselves.
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col lg:flex-row items-center justify-around mt-40 xl:mt-24 2xl:mt-40'>

                <div className='relative'>
                    <img src="/assets/Triangle.png" alt="" className='w-[430px] lg:w-[551px] relative' />
                    <img src="/assets/Bitmap (2).png" alt="" className='w-[200px] lg:w-[246px] absolute top-10 left-10 ' style={{ zIndex: 1 }} />
                    <img src="/assets/block (1).png" alt="" className='w-[180px] lg:w-[246px] absolute top-28 right-0 ' style={{ zIndex: 1 }} />
                    <img src="/assets/Star.png" alt="" className='w-[110px] lg:w-[147px] absolute top-[85px] lg:top-[75px] -right-2 ' />
                    <img src="/assets/Combined Shape (1).png" alt="" className='w-[40px] lg:w-[51px] absolute top-[265px] left-32 lg:top-[305px] lg:left-40 ' />
                    <img src="/assets/CompositeLayer (3).png" alt="" className='w-[150px] lg:w-[211px] absolute top-[280px] left-60 lg:top-[350px] lg:left-72 ' style={{ zIndex: 1 }} />
                    <img src="/assets/Combined Shape (2).png" alt="" className='w-[100px] lg:w-[128px] absolute top-[200px] lg:top-[230px] -right-5 ' />


                </div>

                <div className='relative mt-32 text-[#391400]'>
                    <p className='text-[#EF6D58] text-[20px] lg:text-[16px] mb-1'>Service</p>
                    <div className='text-[56px] leading-[80px] mb-10 '>
                        <p>Making Complex </p>
                        <p>Digital Products</p>

                    </div>

                    <div className='leading-[35px]'>
                        <p>
                            Agency provides a full service range including
                        </p>
                        <p>technical skills, design, business.</p>
                    </div>

                    <figure className='flex items-center space-x-5 mt-5'>
                        <img src="/assets/CompositeLayer (4).png" alt="" className='self-start lg:self-center w-[60px] lg:w-[48px]' />
                        <div className='flex flex-col justify-start text-[16px] '>
                            <figcaption className='w-[80%] lg:w-[100%]'>&quot;Understanding, ability to put themselves in the &quot;</figcaption>
                            <figcaption className='w-[80%] lg:w-[100%]'>merchant`s shoes. It is meant to partner.</figcaption>
                        </div>
                    </figure>
                    <p className='text-[16px] ml-16 mt-5 mb-5 font-semibold'>Jenny Murtaugh</p>
                    <button className='bg-[#ffff] border-1 border-[#ffff] rounded-sm w-[138px] p-3 mt-5 '>
                        Explore
                    </button>


                </div>

            </div>  {/**/}




            <div className='text-[40px] text-[#391400]'>
                <div className='ml-12 mt-20 xl:ml-[90px] 2xl:ml-[180px] mb-10'>
                    <p className='text-[16px] text-[#EF6D58]'>Service</p>
                    <p> Can Help</p>
                    <p>How Our Agency</p>
                </div>

                <div className='flex justify-center '>
                    <div className='text-[#391400] flex flex-col lg:flex-row'>
                        <div className='w-[391px] h-[400px] text-[40px]  border-1  border-[#391400] p-8 '>
                            <div className='text-[#391400] text-[20px] mt-5'>
                                <img src="/assets/CompositeLayer (5).png" alt="" className='' />
                                <p className='text-[#EF6D58] text-[16px] my-8'>Design</p>
                                <p>Agency provides a full service range  </p>
                                <p className='mb-8'> including technical skills, design.</p>
                                <p className='text-[16px]'>Learn More</p>
                            </div>

                        </div>
                        <div className='w-[391px] h-[400px] text-[40px]  border-1  border-[#391400] p-8'>
                            <div className='text-[#391400] text-[20px] mt-5'>
                                <img src="/assets/CompositeLayer (6).png" alt="" className='' />
                                <p className='text-[#EF6D58] text-[16px] my-8'>Development</p>
                                <p>Full service range including technical  </p>
                                <p className='mb-8'>skills, design, business.</p>
                                <p className='text-[16px]'>Discover More</p>
                            </div>

                        </div>


                        <div className='w-[391px] h-[400px] text-[40px]  border-1  border-[#391400] p-8'>
                            <div className='text-[#391400] text-[20px] mt-5'>
                                <img src="/assets/CompositeLayer (7).png" alt="" className='' />
                                <p className='text-[#EF6D58] text-[16px] my-8'>Marketing</p>
                                <p>Technical skills, design, business  </p>
                                <p className='mb-8'>understanding, ability.</p>
                                <p className='text-[16px]'>Explore More</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-[#28293E] '>

                <div className='flex flex-col items-center justify-center mt-32 py-20'>
                    <p className='text-[#EF6D58] text-[16px]'>Portfolio</p>
                    <p className='text-[#ffff] text-[56px]' >Latest Work</p>
                    <div className=' text-[16px] text-[#ffff] hidden lg:flex space-x-10'>
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

                <div className='flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 relative'>
                    <img src="/assets/Bitmap (3).png" alt="" className=' w-[420px] lg:w-[470px] h-[416px] ' />
                    <div className='absolute top-[260px] left-14  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Design</button>
                        <p className='text-[#ffff] text-[40px]'>SOFA</p>
                    </div>
                    <img src="/assets/Bitmap (4).png" alt="" className=' w-[420px] lg:w-[670px] h-[416px]' />
                    <div className='absolute top-[700px] left-14  xl:top-72 xl:left-[580px] 2xl:bottom-10 2xl:left-[700px]'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Branding</button>
                        <p className='text-[#ffff] text-[40px]'>KeyBoard</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 mt-8 relative'>
                    <img src="/assets/Bitmap (5).png" alt="" className='w-[420px] lg:w-[670px] h-[416px]' />

                    <div className='absolute top-[260px] left-14  xl:top-72 xl:left-20 2xl:bottom-10 2xl:left-48'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Illustration</button>
                        <p className='text-[#ffff] text-[40px]'>Work Media</p>
                    </div>
                    <img src="/assets/Bitmap (6).png" alt="" className='w-[420px] lg:w-[470px] h-[416px]' />

                    <div className='absolute top-[700px] left-14  xl:top-72 xl:left-[780px] 2xl:bottom-10 2xl:left-[900px]'>
                        <button className='bg-[#ffff] text-[#391400] text-[16px] px-4 py-2 rounded-full'>Motion</button>
                        <p className='text-[#ffff] text-[40px]'>DDDone</p>
                    </div>
                </div>


                <div className='flex items-center justify-center py-5'>
                    <button className='bg-[#28293E] border-1 border-[#ffff] text-[#fff] rounded-sm w-[138px] p-3 mt-5 '>
                        Explore
                    </button>
                </div>


                <div className='relative h-[860px] w-[336px] lg:w-[1170px] xl:h-[300px] 2xl:h-[336px] bg-[#FDF0E9] rounded-lg mx-auto mt-32 ' >
                    <img src="/assets/icon.png" className='w-[147px]  absolute -top-[80px] left-5' alt="" />

                    <div className='flex flex-col lg:flex-row justify-center space-y-24 lg:space-y-0  lg:space-x-20 items-center py-16 xl:py-10 2xl:py-16'>

                        <div className='text-[24px] text-[#391400]'>
                            <p className='text-[#EF6D58] text-[16px]'>Get Started</p>

                            <p className=' '>We Help companies</p>
                            <p>Move Faster</p>
                            <button className='bg-[#EF6D58] border-1 border-[#EF6D58] text-[#fff] rounded-sm w-[138px] text-[16px] p-3 mt-5 '>
                                Contact Us
                            </button>
                        </div>
                        <div>
                            <img src="/assets/block (2).png" alt="" className='w-[338px] h-[176px]' />
                        </div>
                        <div className='relative'>
                            <img src="/assets/Path (1).png" className='w-[230px] h-[242px] xl:w-[190px] xl:h-[232px] 2xl:w-[282px] 2xl:h-[242px] ' alt="" />
                            <img src="/assets/Bitmap (7).png" className='w-[210px] h-[350px] 2xl:w-[239px] 2xl:h-[396px] absolute -top-[90px] -right-5 lg:-top-[90px] lg:-right-3  2xl:-top-[120px] 2xl:-right-3' alt="" />
                        </div>

                    </div>




                </div>



                <div className='text-[40px] lg:text-[56px] text-[#ffff] font-semibold flex flex-col justify-center items-center mt-20'>
                    <p className='text-[20px] lg:text-[16px] text-[#EF6D58] font-normal' >Event</p>
                    <p>Explore Future</p>
                    <p>Conferences</p>
                </div>

                <div className='flex flex-col justify-center lg:flex-row items-center lg:space-x-10 mt-20 '>
                    <div className='border-1 border-[#3A3C56] w-[370px] h-[448px] p-8 '>
                        <div className='flex items-center space-x-5'>
                            <p className='text-[72px] text-[#ffff]'>3</p>
                            <p className='text-[24px] text-[#ffff]'>November </p>
                            <p className='text-[24px] text-[#ffff]'>2021</p>
                        </div>
                        <div className='flex items-center mb-10 space-x-2'>
                            <img src="/assets/shape.png" className='w-[16px]' alt="" />
                            <p className='text-[16px] text-[#ffff]'>9:00 am – 3:00 pm</p>
                        </div>
                        <hr className=' opacity-25' />
                        <div className='text-[16px] text-[#ffff] mt-8 space-y-8'>
                            <p className='text-[24px]'>Design Weeks</p>
                            <p className='' style={{ color: 'RGBA(255,255,255,0.64 )' }}>Digital agency is a business you hire</p>
                            <p style={{ color: 'RGBA(255,255,255,0.64 )' }}>to outsource your digital.</p>
                            <p className='text-[16px]'>Explore Now</p>
                        </div>
                    </div>

                    <div className='border-1 border-[#3A3C56] w-[370px] h-[448px] p-8 '>
                        <div className='flex items-center space-x-5'>
                            <p className='text-[72px] text-[#ffff]'>15</p>
                            <p className='text-[24px] text-[#ffff]'>November </p>
                            <p className='text-[24px] text-[#ffff]'>2021</p>
                        </div>
                        <div className='flex items-center mb-10 space-x-2'>
                            <img src="/assets/shape.png" className='w-[16px]' alt="" />
                            <p className='text-[16px] text-[#ffff]'>1:00 pm – 8:00 pm</p>
                        </div>
                        <hr className=' opacity-25' />
                        <div className='text-[16px] text-[#ffff] mt-8 space-y-8'>
                            <p className='text-[24px]'>Interior Design</p>
                            <p className='' style={{ color: 'RGBA(255,255,255,0.64 )' }}>Marketing efforts, instead of </p>
                            <p style={{ color: 'RGBA(255,255,255,0.64 )' }}>handling in-house.</p>
                            <p className='text-[16px]'>Explore Now</p>
                        </div>
                    </div>

                    <div className='border-1 border-[#3A3C56] w-[370px] h-[448px] p-8'>
                        <div className='flex items-center space-x-5'>
                            <p className='text-[72px] text-[#ffff]'>2</p>
                            <p className='text-[24px] text-[#ffff]'>December  </p>
                            <p className='text-[24px] text-[#ffff]'>2021</p>
                        </div>
                        <div className='flex items-center mb-10 space-x-2'>
                            <img src="/assets/shape.png" className='w-[16px]' alt="" />
                            <p className='text-[16px] text-[#ffff]'>10:00 am – 2:00 pm</p>
                        </div>
                        <hr className=' opacity-25' />
                        <div className='text-[16px] text-[#ffff] mt-8 space-y-8'>
                            <p className='text-[24px]'>The F design events</p>
                            <p className='' style={{ color: 'RGBA(255,255,255,0.64 )' }}>Provide your business with a variety </p>
                            <p style={{ color: 'RGBA(255,255,255,0.64 )' }}> of digital solutions to promote.</p>
                            <p className='text-[16px]'>Explore Now</p>
                        </div>
                    </div>
                </div>



                <div className='flex items-center justify-center py-5'>
                    <button className='bg-[#28293E] border-1 border-[#ffff] text-[#fff] rounded-sm px-10 py-3 mt-5 '>
                        Explore More
                    </button>
                </div>



                <div className='ml-5 w-[90%] lg:w-[88%] lg:flex items-center justify-between lg:ml-20 lg:mr-64 my-32'>

                    <div>
                        <p className='text-[#EF6D58] text-[16px]'>Our Team</p>
                        <div className='text-[40px] lg:text-[56px] text-[#ffff]'>
                            <p >Team of Designers</p>
                            <p>and Developers</p>
                        </div>

                    </div>

                    <div className='hidden lg:flex items-center space-x-5  '>
                        <div className='border-1 border-[#ffff] p-5 rounded-full cursor-pointer' onClick={handleBackClick}>
                            <img src="/assets/Path (2).png" alt="" className='w-[14px] ' />
                        </div>

                        <div className=' border-1 border-[#ffff] p-5 rounded-full cursor-pointer' onClick={handleForwardClick} >
                            <img src="/assets/Path (2).png" alt="" className='w-[14px rotate-180' />
                        </div>
                    </div>
                </div>

                {/* Swiper Slider */}

                <Swiper
                    slidesPerView={slideView}
                    spaceBetween={spaceBetween}
                    ref={swiperRef}
                    modules={[Pagination]}
                    pagination={true}
                    className='mySwiper'
                >

                    <SwiperSlide className='ml-10 sm:ml-3 md:ml-7 lg:ml-4 xl:ml-7 2xl:ml-12 3xl:ml-7'>
                        <div>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (8).png" className='w-[196px] h-[247px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Azah Anyeni</p>
                            <p className='text-[#FFFFFF] text-[16px]'>Designer</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (9).png" className='w-[259px] h-[232px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Roelof Bekkenenks</p>
                            <p className='text-[#FFFFFF] text-[16px]'>React Developer</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (10).png" className='w-[205px] h-[238px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Leonardo Oliveira</p>
                            <p className='text-[#FFFFFF] text-[16px]'>Illustrator</p>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=''>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (11).png" className='w-[230px] h-[233px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Izabella Tabakova</p>
                            <p className='text-[#FFFFFF]  text-[16px]'>Product Designer
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=''>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (8).png" className='w-[230px] h-[233px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Izabella Tabakova</p>
                            <p className='text-[#FFFFFF]  text-[16px]'>Product Designer
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=''>
                            <div className='flex items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (9).png" className='w-[230px] h-[233px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Izabella Tabakova</p>
                            <p className='text-[#FFFFFF]  text-[16px]'>Product Designer
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=''>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (10).png" className='w-[230px] h-[233px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Izabella Tabakova</p>
                            <p className='text-[#FFFFFF]  text-[16px]'>Product Designer
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=''>
                            <div className='flex  items-end justify-center border-1 border-[#3A3C56] w-[270px] h-[272px]'>
                                <figure>
                                    <img src="/assets/Bitmap (11).png" className='w-[230px] h-[233px]' alt="" />
                                </figure>
                            </div>
                            <p className='text-[#FFFFFF] text-[24px]'>Izabella Tabakova</p>
                            <p className='text-[#FFFFFF]  text-[16px]'>Product Designer
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>






                <div className='flex items-center flex-col lg:flex-row justify-evenly py-40  '>
                    <img src="/assets/Bitmap (12).png" alt="" className='w-[450px] lg:w-[570px]' />

                    <div className='text-white relative space-y-5 self-start ml-6 mt-10 lg:ml-0 lg:self-center'>
                        <img src="/assets/Shape (1).png" alt="" className='w-[100px] absolute top-5 -right-20' />
                        <p className='text-[#EF6D58] text-[16px]'>Founder Words</p>
                        <div className=' text-[30px] lg:text-[40px]'>
                            <p>Digital agency is a  </p>
                            <p>a business you hire to </p>
                            <p>outsource your digital </p>
                            <p>marketing efforts</p>
                        </div>

                        <p className='text-[20px] font-semibold'>Ren Delan</p>
                        <p>Founder</p>
                    </div>
                </div>
                {/**/}
            </div>

            <div className='flex flex-col justify-center items-center mt-28 '>
                <p className='text-[#EF6D58] text-[20px] lg:text-[16px] tracking-[1.5px]'>Testimonials</p>
                <p className='text-[40px] lg:text-[56px] text-[#391400]'>What Our</p>
                <p className='text-[40px] lg:text-[56px] text-[#391400]'>Clients Saying</p>
            </div>


            <div className='flex flex-col lg:flex-row item-center  justify-center mt-10'>
                <div className='self-center'>
                    <div className='w-[420px] h-[460px] lg:w-[586px] lg:h-[400px] space-y-10 bg-white text-[16px]  p-14'>
                        <div className='flex items-center space-x-4'>
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />

                        </div>
                        <div>
                            <p>A digital agency is a business you hire to outsource your </p>
                            <p>digital marketing efforts, instead of handling in-house. They</p>
                            <p>can provide your business with a variety of digital solutions to</p>
                            <p>promote your product or service online and help you.</p>

                        </div>

                        <div className='flex items-center space-x-5'>
                            <img src="/assets/Oval.png" alt="" className='w-[80px]' />
                            <div className='text-[#391400] '>
                                <p className='text-[24px]'>Alan Martí</p>
                                <p className='text-[16px]'>Meta Inc.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[420px] h-[430px]  lg:w-[586px] lg:h-[336px]  space-y-10 border-1 border-[#F3D1BF]  p-14'>
                        <div className='flex items-center space-x-4'>
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />

                        </div>
                        <div className='leading-[40px]'>
                            <p>Outsource your digital marketing efforts, instead of handling </p>
                            <p>in-house. They can provide your business with a variety.</p>


                        </div>

                        <div className='flex items-center space-x-5'>
                            <img src="/assets/Oval (2).png" alt="" className='w-[80px]' />
                            <div className='text-[#391400] '>
                                <p className='text-[24px]'>Graham Griffiths
                                </p>
                                <p className='text-[16px]'>Twitor</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='self-center'>
                    <div className='w-[420px] h-[430px] lg:w-[586px] lg:h-[336px] space-y-10 border-1 border-[#F3D1BF]  text-[16px]  p-14'>
                        <div className='flex items-center space-x-4'>
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />

                        </div>
                        <div className='leading-[40px]'>
                            <p>Provide your business with a variety of digital solutions to </p>
                            <p> promote your product or service online.</p>

                        </div>

                        <div className='flex items-center space-x-5'>
                            <img src="/assets/Oval (1).png" alt="" className='w-[80px]' />
                            <div className='text-[#391400] '>
                                <p className='text-[24px]'>Richardo Kann</p>
                                <p className='text-[16px]'>Photogram</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[420px] h-[430px] lg:w-[586px] lg:h-[336px]  space-y-10 border-1 border-[#F3D1BF]  p-14'>
                        <div className='flex items-center space-x-4'>
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />
                            <img src="/assets/Star (1).png" className='w-[23px]' alt="" />

                        </div>
                        <div className='leading-[40px]'>
                            <p>Promote your product or service online and help you hit your </p>
                            <p>marketing goals and grow your business.</p>


                        </div>

                        <div className='flex items-center space-x-5'>
                            <img src="/assets/Oval (3).png" alt="" className='w-[80px]' />
                            <div className='text-[#391400] '>
                                <p className='text-[24px]'>Maria Trofimova

                                </p>
                                <p className='text-[16px]'>Whochat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='flex items-center justify-center mt-14'>
                <button className='bg-[#ffff]  border-1 border-[#ffff] rounded-sm w-[138px] p-3 mt-5 '>
                    See All
                </button>
            </div>



            <div>
                <div className='text-[#391400] text-[56px]  ml-10 lg:ml-44 my-32'>
                    <p className='text-[#EF6D58] text-[16px]'>Pricing</p>
                    <p>Check Our</p>
                    <p>Pricing Plane</p>
                </div>

                <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center'>
                    <div className='w-[300px] lg:w-[391px] h-[512px] border-1 text-[16px] border-[#F3D1BF] p-12 space-y-5'>
                        <p className='text-[#EF6D58]'>Consultation</p>
                        <p className='text-[#391400] text-[40px]'>Free</p>
                        <p>Your digital marketing efforts,</p>
                        <p> instead of handling in-house.</p>

                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/plus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Brand Design</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Market Analysis</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Production</p>
                        </div>

                        <div className='' style={{ marginTop: '20px' }}>
                            <button className='bg-[#ffff]  border-1 border-[#ffff] rounded-sm w-[138px] p-3 '>
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px] h-[600px] lg:w-[391px] lg:h-[560px] border-1 text-[16px] border-[#ffff] bg-[#ffff] p-12 space-y-5'>
                        <button className='bg-[#EF6D58] px-5 py-3 rounded-full'>Popular</button>
                        <p className='text-[#EF6D58]'>Design</p>
                        <p className='text-[#391400] text-[40px]'>$1500</p>
                        <p>Provide your business with a variety </p>
                        <p> of digital solutions to promote.</p>

                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/plus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Brand Design</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Market Analysis</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Production</p>
                        </div>

                        <div className='' style={{ marginTop: '20px' }}>
                            <button className='bg-[#EF6D58]  border-1 border-[#EF6D58] text-white rounded-sm w-[138px] p-3 '>
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className='w-[300px]  lg:w-[391px] h-[512px] border-1 text-[16px] border-[#F3D1BF] p-12 space-y-5'>
                        <p className='text-[#EF6D58]'>Design+Code</p>
                        <p className='text-[#391400] text-[40px]'>$2900</p>
                        <p>Help you hit your marketing goals and</p>
                        <p> grow your business.</p>

                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/plus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Brand Design</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Market Analysis</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img className='w-[16px]' src="/assets/minus.png" alt="" />
                            <p className='text-[#391400] text-[16px]'>Production</p>
                        </div>

                        <div className='' style={{ marginTop: '20px', }}>
                            <button className='bg-[#ffff]  border-1 border-[#ffff] rounded-sm w-[138px] p-3 '>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-evenly mt-24 '>
                    <div className='text-[16px] text-[#391400] space-y-7 ml-8 lg:ml-0'>
                        <div className='text-[50px] lg:text-[40px] font-semibold text-[#391400] leading-[50px]'>
                            <p className='text-[20px]  font-normal lg:text-[16px] text-[#EF6D58] mb-5 tracking-[1.5px]'>Faq</p>
                            <p>Frequently Asked </p>
                            <p>Questions</p>
                        </div>
                        <p>A digital agency is a business you hire to outsource your</p>
                        <p>digital marketing efforts, instead of handling in-house.</p>
                        <p>Contact Us</p>

                    </div>
                    <div className='self-center lg:self-start'>
                        <div className={`cursor-pointer w-[430px] h-[310px] lg:w-[570px] transition-all duration-500 ease-in-out ${isOpen.div1 ? 'h-[100px]' : 'h-[113px]'}  text-[14px] lg:text-[16px]  py-5 px-10 bg-[#FFFFFF]`} onClick={() => clickOpener('div1')}>
                            <div className='text-[#391400]  flex justify-between items-center py-5  text-[24px]'>
                                <p>A digital agency is a business</p>
                                {!isOpen.div1 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                                }
                            </div>
                            {
                                !isOpen.div1 ? <div className='space-y-3'>
                                    <p>Digital marketing efforts, instead of handling in-house. They</p>
                                    <p>can provide your business with a variety of digital solutions</p>
                                    <p>to promote your product or service online and help you hit</p>
                                    <p>your marketing goals and grow your business.</p>
                                </div> : <div></div>
                            }


                        </div>
                        <div onClick={() => clickOpener('div2')} className='w-[430px] lg:w-[570px] cursor-pointer self-center lg:self-start h-[113px] flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                            <p className='text-[24px] text-[#391400]'>Hire to outsource your digital</p>
                            {!isOpen.div2 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }                        </div>
                        <div onClick={() => clickOpener('div3')} className='w-[430px] lg:w-[570px] h-[113px] cursor-pointer self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                            <p className='text-[24px] text-[#391400]'>Marketing efforts</p>
                            {!isOpen.div3 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }                        </div>
                        <div onClick={() => clickOpener('div4')} className='w-[430px] lg:w-[570px] h-[113px] cursor-pointer self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#F3D1BF]'>
                            <p className='text-[24px] text-[#391400]'>Can provide your business</p>
                            {!isOpen.div4 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }
                        </div>
                    </div>
                </div>




                <div className='text-center mt-28'>
                    <p className='text-[40px] text-[#391400]'>Our Awards</p>
                </div>


                <div className='mx-48 mt-20 space-y-7'>

                    <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 justify-between  '>
                        <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0  lg:space-x-5'>
                            <img src="/assets/Bitmap (13).png " className='w-[120px]' alt="" />
                            <p className='text-[16px] lg:text-[20px] text-[#391400]'>SOFA</p>
                        </div>
                        <div className=''>
                            <p className='text-[12px] lg:text-[16px]'>25 Oct, 2021</p>
                        </div>

                        <div className='flex flex-col lg:flex-row  items-center  space-y-5 lg:space-y-0 lg:space-x-5'>
                            <p>Awwwards</p>
                            <img src="/assets/Bitmap (14).png" className='w-[48px]' alt="" />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between  space-y-5 lg:space-y-0 '>
                        <div className='flex flex-col lg:flex-row items-center  space-y-5 lg:space-y-0  lg:space-x-5'>
                            <img src="/assets/Bitmap (15).png " className='w-[120px]' alt="" />
                            <p className='text-[16px] lg:text-[20px] text-[#391400]'>KeyBoard</p>
                        </div>
                        <div className=''>
                            <p className='text-[12px] lg:text-[16px]'>19 Oct, 2021</p>
                        </div>

                        <div className='flex flex-col lg:flex-row items-center  space-y-5 lg:space-y-0  lg:space-x-5'>
                            <p>Work Media</p>
                            <img src="/assets/Bitmap (16).png" className='w-[48px]' alt="" />
                        </div>
                    </div>


                    <div className='flex flex-col lg:flex-row  items-center justify-between space-y-5 lg:space-y-0 '>
                        <div className='flex flex-col lg:flex-row  items-center space-y-5 lg:space-y-0  lg:space-x-5 '>
                            <img src="/assets/Bitmap (17).png " className='w-[120px]' alt="" />
                            <p className=' text-[16px] lg:text-[20px] text-[#391400]'>Work Media</p>
                        </div>
                        <div className=''>
                            <p className='text-[12px] lg:text-[16px]'>7 Oct, 2021</p>
                        </div>

                        <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0  lg:space-x-5'>
                            <p>The FWA</p>
                            <img src="/assets/Bitmap (18).png" className='w-[48px]' alt="" />
                        </div>
                    </div>


                </div>


                <div className='flex items-center justify-center mt-20'>
                    <p className='text-[#391400] text-[16px]'>Want more awards? <span className='font-semibold'>Explore Now</span> </p>
                </div>

                <p className='text-[#EF6D58] text-[20px] lg:text-[16px] ml-8 mt-10 xl:ml-32 2xl:ml-48 lg:mt-20'>Our Blog</p>

                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between ml-8 xl:ml-32 xl:mr-20 2xl:ml-48 2xl:mr-40'>
                    <p className='text-[56px] text-[#391400] my-10 w-[300px]'>Latest Blog Articles </p>

                    <button className='bg-[#ffff]  border-1 border-[#ffff] rounded-sm w-[138px] p-3 '>
                        Discover All
                    </button>
                </div>

                <div className='flex flex-col lg:flex-row mt-10  lg:justify-center lg:items-center space-y-5 lg:space-y-0 lg:space-x-5 2xl:space-x-10'>
                    <div className='text-[#391400] text-[24px] space-y-3 ml-8 lg:ml-0'>
                        <img src="/assets/Bitmap (21).png" className='w-[95%]  lg:w-[370px] lg:h-[224px]' alt="" />
                        <p className='text-[24px] '>Stories</p>
                        <p className='font-semibold'>Agency is a business you</p>
                        <p className='font-semibold'>hire to outsource</p>
                        <p className=''>5 Nov, 2021</p>

                    </div>

                    <div className='text-[#391400] text-[24px] space-y-3 ml-8 lg:ml-0'>
                        <img src="/assets/Bitmap (22).png" className='w-[95%] lg:w-[370px] lg:h-[224px]' alt="" />
                        <p className='text-[24px] '>Design</p>
                        <p className='font-semibold'>Outsource your digital</p>
                        <p className='font-semibold'>marketing efforts</p>
                        <p className=''>29 Oct, 2021</p>

                    </div>

                    <div className='text-[#391400] text-[24px] space-y-3 ml-8 lg:ml-0'>
                        <img src="/assets/Bitmap (23).png" className='w-[95%] lg:w-[370px] lg:h-[224px]' alt="" />
                        <p className='text-[24px] '>Marketing</p>
                        <p className='font-semibold'> Your business with a </p>
                        <p className='font-semibold'> variety of digital</p>
                        <p className=''>21 Oct, 2021</p>

                    </div>


                </div>



                <div className='flex flex-col lg:flex-row lg:justify-between space-y-5 lg:space-y-0 lg:items-center ml-8 xl:ml-28 xl:mr-24 2xl:ml-48 2xl:mr-40 mt-24'>
                    <div>
                        <p className='text-[40px] text-[#391400]'>Newsletter</p>
                    </div>
                    <div className=' space-y-5 lg:space-x-5'>
                        <input type="text" name="" id="" placeholder='New Email' className='w-[90%] h-[60px] lg:w-[370px] lg:h-[48px] p-5' />
                        <button className='bg-[#ffff]  border-1 border-[#ffff]  rounded-sm w-[90%] h-[60px] lg:h-[48px] lg:w-[138px] p-3 '>
                            Contact Us
                        </button>
                    </div>
                </div>


                <div className='hidden sm:block bg-cover bg-center w-full h-[720px] relative mt-20' style={{ backgroundImage: 'url(/assets/map.png)' }}>

                    <div className='absolute top-40 left-40 '>
                        <div className='w-[470px] h-[464px] bg-white flex flex-col space-y-8 p-10' >

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


                <div className='block sm:hidden bg-cover bg-center w-full h-[720px] relative mt-20' >
                    <div className='flex items-center justify-center'>
                        <div className='w-[430px] h-[464px] bg-white flex flex-col space-y-8 p-5' >

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

                </div>

                <div className='block sm:hidden  bg-cover bg-center w-[100%] h-[720px] relative mt-0' style={{ backgroundImage: 'url(/assets/map.png)' }}>

                    <div className='absolute top-72 right-36 '>
                        <img src="/assets/pin.png" className='w-[72px]' alt="" />
                    </div>
                </div> {/**/}




                <div className='bg-[#EF6D58] h-[1200px] w-[90%] ml-6 lg:ml-0 lg:w-[100%] lg:h-[542px] flex flex-col-reverse lg:flex-row items-center justify-around mt-40'>

                    <div className=' space-y-10 mt-10 lg:mt-0'>
                        <div className='text-[56px] text-[#ffff]'>
                            <p>We’re Help</p>
                            <p>To Build Your</p>
                            <p>Dream Project</p>
                        </div>

                        <div className='text-[16px] text-[#ffff]'>
                            <p>A digital agency is a business you hire to outsource your</p>
                            <p>digital marketing efforts, instead of handling in-house.</p>
                        </div>

                        <button className='bg-[#ffff] text-[#391400] border-1 border-[#ffff] rounded-sm w-[138px] p-3 '>
                            Contact Us
                        </button>
                    </div>

                    <div className='relative'>
                        <div >
                            <img src="/assets/oval (5).png" alt="" className='w-[300px] lg:w-[318px] mt-10 lg:mt-0' />
                        </div>
                        <img src="/assets/CompositeLayer (9).png" alt="" className='absolute -top-20 right-48 lg:-top-28 lg:right-56 w-[160px] lg:w-[176px]' />
                        <img src="/assets/Combined Shape (3).png" alt="" className='absolute  top-10 right-40 h-[135px] w-[100px]' />

                        <img src="/assets/Bitmap-24.png" alt="" className='absolute -top-0 -right-8 lg:-top-10 lg:-right-14 w-[200px] h-[250px] lg:w-[246px] lg:h-[305px]' />
                        <img src="/assets/block (3).png" alt="" className='absolute top-[140px] right-[150px] lg:top-[120px] lg:right-[170px] w-[150px] h-[80px] lg:w-[214px] lg:h-[112px]' />
                        <img src="/assets/ARROW.svg" alt="" className='absolute top-[230px] opacity-50 right-[140px] w-[94px]' />

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




                <div className='flex flex-col lg:flex-row justify-between items-center'>

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
        </div >

    )
}

export default Content