import { Swiper, SwiperSlide } from 'swiper/react';
import reklama from "../../assets/bekjan/svg/reklama.svg"
import icon from "../../assets/bekjan/svg/icon1.svg"
// import icon1 from "../../assets/bekjan/svg/icon2.svg"
// import icon2 from "../../assets/bekjan/svg/icon3.svg"
// import icon3 from "../../assets/bekjan/svg/icon4.svg"
// import icon4 from "../../assets/bekjan/svg/icon5.svg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='reclama'>
                        <img className='rec-img' src={reklama} alt="img"/>
                        <div className='rec-texts'>
                            <img className='rec-icon' src={icon} alt="icon"/>
                            <h1 className='rec-text'>ДОСТАВКА В ДЕНЬ ЗАКАЗА</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}
