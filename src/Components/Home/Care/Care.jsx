import { Container } from "../../Container/Container";
import image from "../../../assets/bekjan/svg/image.svg"
import image1 from "../../../assets/bekjan/svg/image1.svg"
import image2 from "../../../assets/bekjan/svg/image2.svg"

import "./Care.css";

const productData = [
    {
        title: "Лучшие ингрединты",
        image:image,
        description: "В день заказа доставка курьером или самовывоз",
    },
    {
        title: "Упаковка",
        image:image2,
        description: "Что-то про суперкоробочки и бантики и бла бла бла",
    },
    {
        title: "Получение в день заказа",
        image:image1,
        description: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
    },
    {
        title: "Получение в день заказа",
        image:image,
        description: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
    },

];

const Producs = () => {
    return (
        <Container>
            <div className="care-display">
                <h1 className="care-h1">Мы обо всём позаботились</h1>
                <div className="care-products">
                    {productData.map((product, index) => (
                        <div key={index} className="care-producter">
                            <img className="care-img-product" src={product.image} alt="img" />
                                <div className="care-texts">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                        </div>
                    ))}
                </div>  
            </div>
        </Container>
    );
}

export default Producs;
