import "./Info.css";
import imgBasket from "../../assets/Sherniaz/svg/Group3.svg";
import img1 from "../../assets/Sherniaz/svg/Group227.svg";
import img2 from "../../assets/Sherniaz/svg/Group226(1).svg";
import img3 from "../../assets/Sherniaz/svg/Group225.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../api/api";

const InfoText = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const selectProduct = productsData.find(product => product.id === parseInt(id))
    if (selectProduct) {
      setProduct(selectProduct)
    } else (
      console.log("error")
    )
  }, [id])
  return (
    <div className="info-content-text">
      {
        product ? (
          <>
            <h2>{product.name}</h2>
            <p className="info-content-text-p">
              {product.description}
            </p>
            <div className="info-content-text-count">
              <h4>Вкусы:</h4>
              <div className="info-content-text-count-in">
                {product.flavors.map((item, index) => (
                  <>
                    <div className="quantity" key={index}>
                      <p className="quantity-text">
                        {item.flavor}
                      </p>
                      <p className="quantity-text">
                        {item.quantity}
                      </p>
                    </div>
                  </>
                ))}
              </div >
            </div>
            <div className="info-content-text-price">
              <p>{product.price}  руб</p>
              <button>
                <img src={imgBasket} alt="Корзина" /> В корзину
              </button>
            </div>
            <div className="info-content-text-cards-1">
              <img src={img1} alt="Изображение 1" />
              <p>{product.delivery}</p>
            </div>
            <div className="info-content-text-cards-2">
              <img src={img2} alt="Изображение 2" />
              <p>{product.pickup}</p>
            </div>
            <div className="info-content-text-cards-3">
              <img src={img3} alt="Изображение 3" />
              <p>{product.gift}</p>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  );
};

export default InfoText;
