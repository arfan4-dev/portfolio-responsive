/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Gallery = () => {

    return (
        <div>
            <h2>My Picture Gallery</h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[420px] h-[460px] lg:w-[586px] lg:h-[400px] space-y-10 bg-white text-[16px]  border-1 border-[#F3D1BF] p-14'>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Gallery;
