import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../../Container/Container';
import product from "../../../assets/bekjan/svg/news.svg";
import product2 from "../../../assets/bekjan/svg/news1.svg";
import product3 from "../../../assets/bekjan/svg/news2.svg";
import { motion } from 'framer-motion';

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

    const animation = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.3,
                duration: 0.5,
                ease: 'easeInOut'
            }
        })
    }

    return (
        <Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                className='news-carusel'
                viewport={{ amount: 0.3, once: true }}>
                <motion.div variants={animation} custom={1} className='news-text-sale'>
                    Новости
                </motion.div>
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
                            <motion.div variants={animation} custom={index}>
                                <Slide image={slide.image} date={slide.date} text={slide.text} note={slide.note} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="nabor">
                    Все новости
                </button>
            </motion.div>
        </Container>
    );
}
