import { Container } from "../../Container/Container";
import card from "../../../assets/bekjan/svg/cards.svg";
import products from "../../../assets/bekjan/svg/products.svg";
import "./Producs.css";

const productData = [
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },
    {
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб"
    },

];

const Producs = () => {
    return (
        <Container>
            <div className="display">
                <h1 className="h1">Популярные наборы</h1>
                <div className="products">
                    {productData.map((product, index) => (
                        <div key={index} className="producter">
                            
                            <img className="img-product" src={products} alt="img" />
                            <div className="infos">
                                <div className="texts">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="price">
                                    <p>{product.price}</p>
                                    <button className="product-button">
                                        <img className="product-cart" src={card} alt="img" />
                                        Купить
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
