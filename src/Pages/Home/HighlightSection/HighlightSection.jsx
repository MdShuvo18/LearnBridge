import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const HighlightSection = () => {

    const axiosPublic = useAxiosPublic()
    const { data: allclasses = [] } = useQuery({
        queryKey: ['allclasses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allclass')
            console.log(res.data)
            return res.data

        }
    })

    return (
        <div className='space-y-20'>
            <div className='text-4xl text-center mb-10'>
                <h1>-----<span className='font-extrabold'>Our Popular Courses</span>-----</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    allclasses.map(item => <div key={item._id}>
                        <SwiperSlide>
                            <div>
                                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={item.image} alt="image NOTFOUND" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.short_description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>)
                }

            </Swiper>
        </div>
    );
};

export default HighlightSection;