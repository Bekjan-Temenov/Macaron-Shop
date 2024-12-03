import { Container } from "../../Container/Container";
import image from "../../../assets/bekjan/svg/image.svg"
import image1 from "../../../assets/bekjan/svg/image1.svg"
import image2 from "../../../assets/bekjan/svg/image2.svg"
import { motion } from "framer-motion";
import "./Care.css";

const productData = [
    {
        title: "Лучшие ингрединты",
        image: image,
        description: "В день заказа доставка курьером или самовывоз",
    },
    {
        title: "Упаковка",
        image: image2,
        description: "Что-то про суперкоробочки и бантики и бла бла бла",
    },
    {
        title: "Получение в день заказа",
        image: image1,
        description: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
    },
    {
        title: "Получение в день заказа",
        image: image,
        description: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
    },
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

const Producs = () => {
    return (
        <Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                className="care-display">
                <motion.h1 variants={animation} custom={1} className="care-h1">Мы обо всём позаботились</motion.h1>
                <div className="care-products">
                    {productData.map((product, index) => (
                        <motion.div
                            variants={animation} custom={index}
                            key={index} className="care-producter">
                            <img className="care-img-product" src={product.image} alt="img" />
                            <div className="care-texts">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
}

export default Producs;
