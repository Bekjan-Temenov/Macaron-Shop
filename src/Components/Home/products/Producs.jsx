import { Container } from "../../Container/Container";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from "../cart";
import card from "../../../assets/bekjan/svg/cards.svg";
import { motion } from "framer-motion";
import {productsData} from "../../api/api";
import "./Producs.css"; // corrected the file name

const Products = () => { // corrected the component name
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        console.log("добавлено", item);
        alert("добавлено");
    };

    const animation = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 0.4,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
                className="display"
            >
                <motion.h1 variants={animation} custom={1} className="h1">
                    Популярные наборы
                </motion.h1>
                <div className="products">
                    {productsData.map((product, index) => (
                        <motion.div
                            variants={animation}
                            custom={index}
                            key={index}
                            className="producter"
                        >
                            <Link to={`/info/${product.id}`}>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    className="img-product"
                                    src={product.img}
                                    alt={product.name}
                                />
                            </Link>
                            <div className="infos">
                                <div className="texts">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="price">
                                    <p>{product.price} руб</p>
                                    <button
                                        onClick={() => addCart(product)}
                                        className="product-btn"
                                    >
                                        <img
                                            className="product-cart"
                                            src={card}
                                            alt="Корзина"
                                        />
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};

export default Products; // corrected the export name
