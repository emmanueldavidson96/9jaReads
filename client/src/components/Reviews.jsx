import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react';
import recomemdPic from '../assets/1.jpg';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-8'>Our Customers</h2>
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6 '>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                            <FaStar />
                            <FaStar/>
                        </div>

                        <div className='mt-7'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam omnis 
                                odit accusantium at ducimus, beatae cupiditate eveniet consectetur earum natus quidem eius, 
                                necessitatibus officiis provident. Aspernatur consequatur earum molestiae?
                                </p>
                            <Avatar 
                                alt="avatar of Jese"
                                img={recomemdPic}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Mark Ping</h5>
                            <p className='text-base'>CEO, ABC Company</p>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>

    </div>
  )
}

export default Reviews