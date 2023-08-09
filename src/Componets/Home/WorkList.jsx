import React from 'react'
import Workdetail from './Workdetail'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WorkdetailSecond from './WorkdetailSecond';
import WorkdetailThird from './WorkdetailThird';


//  import swiper css
import 'swiper/css';


function WorkList() {

    return (
        <div className='bg-transparent md:bg-[#163238] p-1 md:p-5 rounded-lg'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

            >
                <SwiperSlide><Workdetail /></SwiperSlide>
                <SwiperSlide><WorkdetailSecond /></SwiperSlide>
                <SwiperSlide><WorkdetailThird /></SwiperSlide>

            </Swiper>

        </div>
    )
}

export default WorkList
