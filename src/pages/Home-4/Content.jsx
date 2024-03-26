/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

const Content = () => {
    const swiperRef = useRef(null);
    const [width, setWidth] = useState();
    const [slideView, setSlideView] = useState(4)
    const [spaceBetween, setSpaceBetween] = useState(20);
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
        <div className='min-h-screen bg-[#FDF0E9]'>

            <div className='flex flex-col lg:flex-row justify-around items-start lg:items-center py-10'>
                <div className='text-[40px] lg:text-[56px] text-[#391400] leading-normal  ml-5 mb-5 '>
                    <p className='text-[#EF6D58] text-[16px] '>About</p>
                    <p>An Experience</p>
                    <p> Design Agency</p>
                </div>
                <div className='lg:w-[570px] lg:text-[16px] ml-5 mr-5 leading-[30px]'>
                    <p>Ability to put themselves in the merchant`s shoes. It is meant to partner on the long run, and work as an extension of the merchant`s team. </p>
                </div>
            </div>
            <div className='flex justify-end'>
                <p className='ml-5 mr-5 lg:w-[570px] text-[16px] xl:mr-[110px] 2xl:mr-[150px] leading-[30px]'>
                    A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                </p>
            </div>


            <div className='flex flex-col lg:flex-row items-center justify-center xl:space-x-8 py-20'>
                <div>
                    <img src="/assets/mount-play.png" alt="" className='w-[329px] h-[259px] xl:w-[570px] xl:h-[454px]' />
                </div>
                <div className='space-x-3  mt-3 lg:mt-0 xl:space-y-8 flex lg:block'>
                    <img src="/assets/Bitmap-clock.png" alt="" className='w-[156px] h-[120px] xl:w-[270px] xl:h-[208px]' />
                    <img src="/assets/Bitmap (44).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                </div>
                <div className='space-x-3  mt-3 lg:mt-0  xl:space-y-8 flex lg:block'>
                    <img src="/assets/Bitmap (45).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                    <img src="/assets/Bitmap (46).png" alt="" className='w-[156px] h-[120px]  xl:w-[270px] xl:h-[208px]' />
                </div>
            </div>


            <div className='flex flex-col space-y-10 lg:flex-row justify-center lg:space-x-40 items-start  lg:items-center ml-5  lg:ml-0 lg:mr-0  xl:py-10 2xl:py-0 tracking-[1px] '>
                <div className='text-[#391400] text-[20px] w-[336px] '>
                    <p className='text-[#EF6D58] text-[16px] mb-8 tracking-[1.5px]'>Features</p>
                    <p className='text-[20px] font-semibold'>Long run, and work as an extension of the merchant`s team.</p>

                    <p className='text-[16px] tracking-[1.5px] mt-5'>Ability to put themselves in the merchant`s shoes. It is meant to partner on the long run, and work as an extension.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row items-end'>
                    <div className='bg-[#ffff] w-[336px] h-[336px] rounded-lg text-[16px] flex flex-col p-10 space-y-1'>
                        <img src="/assets/CompositeLayer (2).png" alt="" className='w-[80px] mb-5' />
                        <p className='text-[24px] text-[#391400]'>Professional</p>
                        <p className='leading-[40px]'>Full service range including  </p>
                        <p>technical skills, design.</p>
                    </div>
                    <div className='text-[#391400] border-1 border-[#F3D1BF] w-[336px] h-[272px] py-20 px-10 rounded-lg text-[16px] flex flex-col space-y-1'>
                        <p className='text-[24px] '>Accessibility</p>
                        <p className='leading-[40px]'>Business understanding, </p>
                        <p>ability to put themselves.
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex flex-row justify-center  bg-[#FDF0E9] py-[1rem] lg:py-20'>
                <div className='text-[#391400] flex flex-col lg:flex-row'>
                    <div className='border-1 w-[300px] lg:w-[391px]  border-[#391400] p-10'>
                        <p className='text-[40px]'>42% </p>
                        <p className='text-[20px]'>Years of experience</p>
                    </div>
                    <div className='w-[300px] lg:w-[391px] border-1  border-[#391400] p-10'>
                        <p className=' text-[40px] '>73+ </p>
                        <p className='text-[20px] '>Agency members</p>
                    </div>
                    <div className='w-[300px] lg:w-[391px]  border-1  border-[#391400] p-10'>
                        <p className='text-[40px]  '>5.000</p>
                        <p className='text-[20px]'>Projects complete</p>
                    </div>
                </div>
            </div>


            <div className='min-h-screen bg-[#28293E] py-5'>
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

                    <SwiperSlide className='ml-10 sm:ml-3 md:ml-7 lg:ml-4 xl:ml-7 2xl:-ml-0 3xl:ml-7'>
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



                {/* <div className='flex flex-col justify-center items-center mt-28 '>
                    <p className='text-[#EF6D58] text-[20px] lg:text-[16px] tracking-[1.5px]'>Testimonials</p>
                    <p className='text-[40px] lg:text-[56px] text-[#ffff]'>What Our</p>
                    <p className='text-[40px] lg:text-[56px] text-[#ffff]'>Clients Saying</p>
                </div>


                <div className='flex flex-col lg:flex-row item-center  justify-center mt-10'>
                    <div className='flex flex-col lg:flex-row item-center  justify-center '>
                        <div className='w-[420px] h-[430px] lg:w-[446px] bg-white lg:h-[336px] space-y-10 border-1 border-[#F3D1BF]  text-[16px]  p-14'>
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

                        <div className='bg-white w-[420px] h-[430px]  lg:w-[446px] lg:h-[336px]  space-y-10 border-1 border-[#F3D1BF]  p-14'>
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




                </div> */}


                <div className='flex flex-col  items-center justify-center mt-24 '>
                    <div className='text-[16px] text-[#ffff] space-y-5  lg:w-[770px] ml-5 lg:ml-0'>
                        <div className='text-[50px] lg:text-[40px] font-semibold text-[#ffff] leading-[50px]'>
                            <p className='text-[20px]  font-normal lg:text-[16px] text-[#EF6D58] mb-5 tracking-[1.5px]'>Faq</p>
                            <p>Frequently Asked </p>
                            <p>Questions</p>
                        </div>
                        <p className='text-[#91919C] '>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                    </div>
                    <div className=' text-[#ffff] mt-10'>
                        <div onClick={() => clickOpener('div1')} className={`w-[375px] h-[310px] ${!isOpen.div1 ? 'lg:h-[273px] ' : 'lg:h-[113px]'} py-20 lg:w-[770px] text-[14px] lg:text-[16px] transition-all duration-500 ease-in-out ${isOpen.div1 ? 'h-[100px]' : 'h-[113px]'}  py-5 px-10 bg-[#FFFFFF]`}>
                            <div className='  flex justify-between items-center py-3  text-[24px]'>
                                <p className='text-[#391400] font-semibold'>A digital agency is a business</p>
                                {!isOpen.div4 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                                }                             </div>
                            {
                                !isOpen.div1 ? <div className='space-y-3 text-[#391400]'>
                                    <p>Digital marketing efforts, instead of handling in-house. They</p>
                                    <p>can provide your business with a variety of digital solutions</p>
                                    <p>to promote your product or service online and help you hit</p>
                                    <p>your marketing goals and grow your business.</p>
                                </div> : <div></div>
                            }
                        </div>
                        <div onClick={() => clickOpener('div2')} className='w-[375px] lg:w-[770px] self-center lg:self-start h-[113px] flex items-center justify-between p-10 border-1 border-[#ffff]'>
                            <p className='text-[24px] '>Hire to outsource your digital</p>
                            {!isOpen.div2 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }                         </div>
                        <div onClick={() => clickOpener('div3')} className='w-[375px] lg:w-[770px] h-[113px] self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#ffff]'>
                            <p className='text-[24px] '>Marketing efforts</p>
                            {!isOpen.div3 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }                         </div>
                        <div onClick={() => clickOpener('div4')} className='w-[375px] lg:w-[770px] h-[113px] self-center lg:self-start flex items-center justify-between p-10 border-1 border-[#ffff]'>
                            <p className='text-[24px] '>Can provide your business</p>
                            {!isOpen.div4 ? <img src="/assets/up.png" alt="" className='w-[32px]' /> : <img src="/assets/down.png" className='w-[32px]' alt="" />
                            }                         </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 grid-rows-2 justify-items-center place-items-center gap-10 lg:flex lg:items-center lg:justify-around mt-10 pb-[750px] lg:pb-[450px] '>
                    <img src="/assets/Bitmap (28).png" alt="" className='w-[147px]' />
                    <img src="/assets/Bitmap (29).png" alt="" className='w-[108px]' />
                    <img src="/assets/Bitmap (30).png" alt="" className='w-[119px]' />
                    <img src="/assets/Bitmap (31).png" alt="" className='w-[86px]' />
                    <img src="/assets/Bitmap (32).png" alt="" className='w-[126px] hidden lg:block' />
                </div>
                {/* <div className='flex items-center justify-center lg:hidden mt-10'>
                    <img src="/assets/Bitmap (32).png" alt="" className='w-[126px] ' />
                </div> */}




            </div>

            <div className='relative -mt-[695px] lg:-mt-[411px]'>


                <div className='relative  flex justify-center items-center mt-10 '>
                    <div className='bg-[#EF6D58] xl:h-[500px] 2xl:h-[600px] w-[90%] ml-0 lg:ml-0  lg:h-[442px] flex flex-col-reverse lg:flex-row items-center justify-around py-20 lg:py-0'>

                        <div className=' space-y-10 mt-10 lg:mt-0'>
                            <div className=' text-[40px] 2xl:text-[56px] text-[#ffff]'>
                                <p>We’re Help</p>
                                <p>To Build Your</p>
                                <p>Dream Project</p>
                            </div>

                            <div className='text-[12px] lg:text-[16px] text-[#ffff]'>
                                <p>A digital agency is a business you hire to outsource your</p>
                                <p>digital marketing efforts, instead of handling in-house.</p>
                            </div>

                            <button className='bg-[#ffff] text-[#391400] border-1 border-[#ffff] rounded-sm w-[118px] p-2 2xl:p-3 '>
                                Contact Us
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
                </div> </div>





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




        </div >
    )
}

export default Content