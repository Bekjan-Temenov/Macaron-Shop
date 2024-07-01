import { Container } from "../../Container/Container";
import { addToCart } from "../cart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsData } from "../../api/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import card from "../../../assets/bekjan/svg/cards.svg";

import "./Producs.css";

const Producs = () => {
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    console.log(addCart);
    toast("добавлено в карзину");
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
        ease: "easeInOut",
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
                <div className="img-pro">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="img-product"
                    src={product.img}
                    alt={product.name}
                  />
                </div>
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
                    <img src={card} alt="Корзина" />В корзину
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="nabor">Все праздничные наборы</button>
      </motion.div>
    </Container>
  );
};
export default Producs
// import { Container } from "../../Container/Container";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from "../store/action";
// import { Link } from "react-router-dom";
// import card from "../../../assets/bekjan/svg/cards.svg";
// import "./Producs.css";

// const Producs = () => {
//     const dispatch = useDispatch();
//     const product = useSelector((state) => state.products.products);
//     const status = useSelector((state) => state.products.status);
//     const error = useSelector((state) => state.products.error);

//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchProducts());
//         }
//     }, [status, dispatch]);

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     } else if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     if (!Array.isArray(product)) {
//         return <div>No products available</div>;
//     }
//     return (
//         <Container>
//             <div className="display">
//                 <h1 className="h1">Популярные наборы</h1>
//                 <div className="products">
//                     {product.map((product, index) => (
//                         <div key={index} className="producter">
//                             <Link to="/info">
//                                 <img className="img-product" src={product.image} alt="img" />
//                             </Link>
//                             <div className="infos">
//                                 <div className="texts">
//                                     <h3>{product.title}</h3>
//                                     <p>{product.description}</p>
//                                 </div>
//                                 <div className="price">
//                                     <p>{product.price}</p>
//                                     <button className="product-btn">
//                                         <img className="product-cart" src={card} alt="img" />
//                                         В корзину
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="nabor">
//                     Все праздничные наборы
//                 </button>
//             </div>
//         </Container>
//     );
// }

// export default Producs;