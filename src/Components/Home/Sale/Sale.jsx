import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../../Container/Container';
import product from "../../../assets/bekjan/svg/product.svg";
import product2 from "../../../assets/bekjan/svg/products2.svg";
import product3 from "../../../assets/bekjan/svg/products3.svg";
import product4 from "../../../assets/bekjan/svg/products4.svg";
import sale from "../../../assets/bekjan/svg/dos.svg";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Sale.css';

import { FreeMode, Navigation, Autoplay } from 'swiper/modules';

const Slide = ({ image, saleImage, text }) => (
    <div className='product'>
        <div className='imgs'>
            <img className='sale' src={saleImage} alt="Sale" />
            <img src={image} alt="Product" />
        </div>
        <div className='product-text'>
            <h3>{text}</h3>
        </div>
    </div>
);

export default function App() {
    const slides = [
        { image: product, text: "По СПб в районе КАД – от 3000₽ По МСК – от 5000₽" },
        { image: product2, text: "Акция 3: бесплатная доставка" },
        { image: product3, text: "Акция 4: купи один, получи второй бесплатно" },
        { image: product4, text: "Акция 5: скидка 20% на все товары" },
        { image: product, text: "По СПб в районе КАД – от 3000₽ По МСК – от 5000₽" },
        { image: product2, text: "Акция 3: бесплатная доставка" },
        { image: product3, text: "Акция 4: купи один, получи второй бесплатно" },
        { image: product4, text: "Акция 5: скидка 20% на все товары" },
    ];

    return (
        <Container>

            <div className='carusel'>
                <div className='text-sale'>
                    Акции
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Slide image={slide.image} saleImage={sale} text={slide.text} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
}
