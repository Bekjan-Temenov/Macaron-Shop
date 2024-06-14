import React from "react";
import "./Info.css";
import imgBasket from "../../assets/sherniaz/Group 3.svg";
import img1 from "../../assets/sherniaz/Group 227.svg";
import img2 from "../../assets/sherniaz/Group 226 (1).svg";
import img3 from "../../assets/sherniaz/Group 225.svg"; 


const InfoText = () => {
  return (
    <div className="info-content-text">
      <h2>Сердце</h2>
      <p className="info-content-text-p">
        40 макаронс в круглой коробке с персональной надписью
      </p>
      <div className="info-content-text-count">
        <h4>Вкусы:</h4>
        <div className="info-content-text-count-in">
          <div>
            Яблоко
            <br />
            Вишня 
            <br />
            Кокос 
          </div>
          <div>
            4 шт.
            <br />
            12 шт.
            <br />
            8 шт.
          </div>
        </div>
      </div>
      <div className="info-content-text-price">
        <p>2800 руб</p>
        <button>
          <img src={imgBasket} alt="Корзина" /> В корзину
        </button>
      </div>
      <div className="info-content-text-cards-1">
        <img src={img1} alt="Изображение 1" />
        <p>Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21.  Бесплатно при заказе на сумму от 2000 руб</p>
      </div>
      <div className="info-content-text-cards-2">
        <img src={img2} alt="Изображение 2" />
        <p>Самовывоз бесплатно Через Три часа после оплаты заказа</p>
      </div>
      <div className="info-content-text-cards-3">
        <img src={img3} alt="Изображение 3" />
        <p>Можем преподнести как анонимный подарок</p>
      </div>
    </div>
  );
};

export default InfoText;
