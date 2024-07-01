import { Container } from "../Container/Container";
import React from "react";
import Products from "../Home/products/Producs";

import "./Sets.css";

function Sets() {
  const names = [
    "Свадьба",
    "Девичник",
    "День рождения",
    "8 марта",
    "23 февраля",
    "Новый год",
    "День учителя",
    "День тренера",
    "1 сентября",
    "Пасха",
    "Без печати",
  ];
  return (
    <Container>
      <div className="main-set">
        <div className="mein-link">
          <div className="main-links">
            <p>Главная </p>
            <p>Каталог </p>
            <p className="mein-link-p"> Готовые наборы</p>
          </div>
          <h1>Готовые Наборы</h1>
        </div>
        <div className="filter-set">
          {names.map((item) => (
            <div className="filter-set-text">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div>
          <Products />
        </div>
      </div>
    </Container>
  );
}

export default Sets;
