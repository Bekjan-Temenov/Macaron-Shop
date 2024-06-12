import React from "react";
import { Container } from "../Container/Container";
import "./Basket.css";
import svg from "../../assets/aftandil/svg/svg.svg";
import App from "../../App";

const Basket = () => {
  return (
    <Container>
      <div className="Basket">
        <h1 className="h1">Ваша корзина</h1>
        <a href="">
          <h1 className="h2">3 товара / 1030 руб.</h1>
        </a>
        <div className="content">
          <img classNa me="image" src={svg} alt="" />
          <h1 className="h3">Набор макарон 12 шт.</h1>
          <h5 className="h4">
            Трюфель 2 шт. <br /> Розмарин 3 шт. <br /> Ананас 1 шт. <br /> Кокос
            4 шт.
          </h5>
          <a href="">
            <h3 className="h5">Скидка по акции “Эклер в подарок”</h3>
          </a>
          <div className="App">
            <App />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Basket;
