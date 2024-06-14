import { Swiper, SwiperSlide } from 'swiper/react';
import reklama from "../../assets/bekjan/svg/reklama.svg";
import icon from "../../assets/bekjan/svg/icon1.svg";
import icon1 from "../../assets/bekjan/svg/icon2.svg";
import icon2 from "../../assets/bekjan/svg/icon3.svg";
import icon3 from "../../assets/bekjan/svg/icon4.svg";
import icon4 from "../../assets/bekjan/svg/icon5.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const slidesData = [
    { img: reklama, icon: icon, text: "ДОСТАВКА В ДЕНЬ ЗАКАЗА" },
    { img: reklama, icon: icon1, text: "ГАРАНТИЯ КАЧЕСТВА" },
    { img: reklama, icon: icon2, text: "САМАЯ НИЗКАЯ ЦЕНА" },
    { img: reklama, icon: icon3, text: "ШИРОКИЙ АССОРТИМЕНТ" },
    { img: reklama, icon: icon4, text: "АКЦИИ И СКИДКИ" },
];

const App = () => (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        style={{ "--swiper-navigation-size": "15px" }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
    >
        {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
                <div className='reclama'>
                    <img className='rec-img' src={slide.img} alt="reklama" />
                    <div className='rec-texts'>
                        <img className='rec-icon' src={slide.icon} alt="icon" />
                        <h1 className='rec-text'>{slide.text}</h1>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default App;
