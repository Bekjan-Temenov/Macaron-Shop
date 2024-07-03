import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from "../Home/cart";
import card from "../../assets/bekjan/svg/card.svg";
import { motion } from "framer-motion";
import yolka from "../../assets/aftandil/img/yolka.png";
import sheet from "../../assets/aftandil/svg/sheet.svg";
import maco from "../../assets/aftandil/svg/maco.svg";
import ter from '../../assets/aftandil/svg/ter.svg'
import "./Wedding.css";
import { Container } from "../Container/Container";

const weddingData = [
  {
    id: 1,
    name: "Продукт 1",
    description: "Описание продукта 1",
    price: 100,
    img: yolka // Убедитесь, что путь к изображению правильный
  },
  {
    id: 2,
    name: "Продукт 2",
    description: "Описание продукта 2",
    price: 200,
    img: maco // Убедитесь, что путь к изображению правильный
  },
  {
    id: 1,
    name: "Продукт 1",
    description: "Описание продукта 1",
    price: 100,
    img: yolka // Убедитесь, что путь к изображению правильный
  },
 
  // Добавьте больше продуктов по необходимости
];

const Wedding = () => {
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
      <div>
        <img className="ml-4" src={yolka} alt="Ёлка" />
        <img className="maco" src={maco} alt="Мако" />
        <img className="afto" src={sheet} alt="Лист" />
        <img className="maco_2" src={maco} alt="Мако 2" />
        <h1 className="wedding">Свадебное предложение</h1>
        <p className="gentle">
          Нежные пирожные макаронс с разными вкусами для <br /> украшения вашего
          свадебного торжества
        </p>
        <div className="button__prais flex justify-center items-center bg-gray-100">
          <button className="m-4 px-6 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
            Презентация
          </button>
          <button className="m-4 px-6 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
            Прайс-лист
          </button>
        </div>
        <p className="fish">
          Рыба-текст предложения <br /><br /> Приятно, граждане, наблюдать, как действия
          представителей оппозиции, превозмогая сложившуюся непростую
          экономическую ситуацию, смешаны с не уникальными данными до степени
          совершенной неузнаваемости, из-за чего возрастает их статус
          бесполезности.
        </p>
      </div>
    
      <div className="motion">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
          className="display"
        >
          <motion.h1 variants={animation} custom={1} className="h1">
            Наборы для свадьбы
          </motion.h1>
          <div className="products">
            {weddingData.map((product, index) => (
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
          <div className="products">
            {weddingData.map((product, index) => (
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
          <div className="products">
            {weddingData.map((product, index) => (
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
        <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 object-cover mb-4"
            src={ter} // Add the correct path to your image
            alt="Invitation and Macarons"
          />
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Мы открыты для новых идей
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероприятия
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Ваше имя</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Укажите имя"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
          </div>
          <div>
            <label htmlFor="idea" className="sr-only">Опишите Вашу идею</label>
            <textarea
              id="idea"
              name="idea"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Опишите Вашу идею"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Отправить заявку
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-gray-600">
            Нажимая на кнопку "Оформить заказ" я принимаю и соглашаюсь с <a href="#" className="text-indigo-600">Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с <a href="#" className="text-indigo-600">Политикой конфиденциальности</a>.
          </p>
        </form>
      </div>
    </div>
      </div>
            
    </Container>
  );
};

export default Wedding;
