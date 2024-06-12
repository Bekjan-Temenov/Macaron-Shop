import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../../Container/Container';
import product from "../../../assets/bekjan/svg/news.svg";
import product2 from "../../../assets/bekjan/svg/news1.svg";
import product3 from "../../../assets/bekjan/svg/news2.svg";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './News.css';

import { FreeMode, Navigation, Autoplay } from 'swiper/modules';

const Slide = ({ image, date, text, note }) => (
    <div className='news-product'>
        <img className='news-img' src={image} alt="Product" />
        <div className='news-text'>
            <p>{date}</p>
            <h3>{text}</h3>
            <span>{note}</span>
        </div>
    </div>
);

export default function News() {
    const slides = [
        { image: product, date: '17.02.2023', text: "Конкурс на 23 февраля!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
        { image: product2, date: '17.02.2023', text: "Конкурс на 23 февраля!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
        { image: product3, date: '17.02.2023', text: "Конкурс на 23 февраля!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
        { image: product, date: '17.02.2023', text: "Скоро главный праздник весны!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
        { image: product2, date: '17.02.2023', text: "Скоро главный праздник весны!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
        { image: product3, date: '17.02.2023', text: "Скоро главный праздник весны!", note: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы" },
    ];

    return (
        <Container>
            <div className='news-carusel'>
                <div className='news-text-sale'>
                    Новости
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="news-mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Slide image={slide.image} date={slide.date} text={slide.text} note={slide.note} />
                        </SwiperSlide>
                    ))}
                    <button className="nabor">
                        Все праздничные наборы
                    </button>
                </Swiper>
            </div>
        </Container>
    );
}
