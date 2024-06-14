import { Container } from "../../Container/Container";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../store/action";
import { Link } from "react-router-dom";
import card from "../../../assets/bekjan/svg/cards.svg";
import "./Producs.css";


const Producs = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(product)) {
        return <div>No products available</div>;
    }
    return (
        <Container>
            <div className="display">
                <h1 className="h1">Популярные наборы</h1>
                <div className="products">
                    {product.map((product, index) => (
                        <div key={index} className="producter">
                            <Link to="/info">
                                <img className="img-product" src={product.image} alt="img" />
                            </Link>
                            <div className="infos">
                                <div className="texts">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="price">
                                    <p>{product.price}</p>
                                    <button className="product-btn">
                                        <img className="product-cart" src={card} alt="img" />
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="nabor">
                    Все праздничные наборы
                </button>
            </div>
        </Container>
    );
}

export default Producs;
// import { Container } from "../../Container/Container";
// import card from "../../../assets/bekjan/svg/cards.svg";
// import "./Producs.css";
// import { Link } from "react-router-dom";
// import productData from "../../api/api";

// const Producs = () => {
//     return (
//         <Container>
//             <div className="display">
//                 <h1 className="h1">Популярные наборы</h1>
//                 <div className="products">
//                     {
//                         productData.map((product, index) => (
//                             <div key={index} className="producter">
//                                 <Link to={`/info/${product.id}`}>
//                                     <img className="img-product" src={product.image} alt={product.name} />
//                                 </Link>
//                                 <div className="infos">
//                                     <div className="texts">
//                                         <h3>{product.name}</h3>
//                                         <p>{product.description}</p>
//                                     </div>
//                                     <div className="price">
//                                         <p>{product.price}</p>
//                                         <button className="product-btn">
//                                             <img className="product-cart" src={card} alt="Корзина" />
//                                             В корзину
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//                 <button className="nabor">
//                     Все праздничные наборы
//                 </button>
//             </div>
//         </Container>
//     );
// };

// export default Producs;
