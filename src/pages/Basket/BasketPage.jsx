import "./Basket.css";
import { Container } from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Components/Home/cart";
import card from "../../assets/bekjan/svg/card.svg";
import {productsData} from "../../Components/api/api"
// import first from '../../Components/image/first.png';
// import second from '../../Components/image/second.png';
import center from "../../Components/image/center.png";
// import three from '../../Components/image/three.png';
// import four from '../../Components/image/fourth.png';
import curer from "../../Components/image/curer.png";
import person from "../../Components/image/person.png";
// import one from '../../Components/image/one.png';
// import two from '../../Components/image/two.png';
// import thre from '../../Components/image/thre.png';
// import foure from '../../Components/image/four.png';
// import left from '../../Components/image/left.png';
// import rigth from '../../Components/image/rigth.png';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { useState } from "react";

const BasketPage = () => {
  const { carts } = useSelector((state) => state.cart);
  const [dos, setDos] = useState(0);
  const dispatch = useDispatch();
  const { changeCount } = useCart();

  const addCart = (item) => {
    dispatch(addToCart(item));
    console.log(addCart);
    toast("добавлено в карзину");
  };
  let subtotal = carts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleDos = (cost) => {
    setDos(cost);
  };

  return (
    <div className="containers">
      <Container>
        <h1>Ваша корзина</h1>
        <section>
          <div className="rigthCon">
            <div className="first">
              <div className="value">
                {carts.map((data, index) => (
                  <>
                    <div key={index} className="box">
                      <img className="imeg" src={data.img} alt="img" />
                      <div className="texts">
                        <h2>{data.name}</h2>
                      </div>
                      <div className="miniBox">
                        <button
                          onClick={() => changeCount("minus", data)}
                          className="miniBox-button "
                        >
                          -
                        </button>
                        {data.quantity}
                        <button
                          onClick={() => changeCount("plus", data)}
                          className="miniBox-button "
                        >
                          +
                        </button>
                      </div>
                      <div className="priceBoxx">
                        <p>
                          <span className="highlight-price">
                            {data.quantity * data.price} руб.
                          </span>
                        </p>
                      </div>
                      <button className="dell">
                        <img
                          src="https://www.svgrepo.com/show/499592/close-x.svg"
                          alt="img"
                        />
                      </button>
                    </div>
                    <hr />
                  </>
                ))}
              </div>

              <div className="center">
                <img src={center} alt="" />
              </div>
              <div className="additi">
                {productsData.slice(1, 4).map((data, index) => (
                  <>
                    <div key={index} className="addBox">
                      <img src={data.img} alt="" />
                      <h2 className="textH3">{data.name}</h2>
                      <div className="miniBox">
                        <button
                          onClick={() => addCart(data)}
                          className="miniBox-button "
                        >
                          -
                        </button>
                        0
                        <button
                          onClick={() => addCart(data)}
                          className="miniBox-button "
                        >
                          +
                        </button>
                      </div>
                      <div className="priceBox2">
                        <p>
                          Цена:{" "}
                          <span className="highlight-price">
                            {" "}
                            {data.price} руб.
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* <div className="additi">
                <div className="addBox">
                  <img src={three} alt="" />
                  <h2 className="textH3">Набор эклеров</h2>
                  <div className="boxMini">
                    <button>-</button>
                    0
                    <button>+</button>
                  </div>
                  <div className="priceBox2">
                    <p>600  <span className="highlight-price">руб.</span></p>
                    <p>Цена: <span className="highlight-price"> 400 руб.</span></p>
                  </div>
                </div>
                <hr className="hr2" />
                <div className="addBox">
                  <img src={four} alt="" />
                  <h2 className="textH3">Набор трубочек со сгущёнкой</h2>
                  <div className="boxMini2">
                    <button>-</button>
                    0
                    <button>+</button>
                  </div>
                  <div className="priceBox2">
                    <p>900  <span className="highlight-price">руб.</span></p>
                    <p>Цена: <span className="highlight-price"> 400 руб.</span></p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="second">
              <h2>Доставка</h2>
              <p>Укажите контактные данные и выберите способ доставки</p>
              <div className="inputs">
                <div className="oneInputs">
                  <div className="firstInput">
                    <p>Ваше имя*</p>
                    <input type="text" placeholder="Укажите имя" />
                  </div>
                  <div className="secondInput">
                    <p>Ваш телефон*</p>
                    <input type="number" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div className="secondCon">
                  <p>Способ доставки:</p>
                  <div className="secondMiddle">
                    <button onClick={() => handleDos(400)} className="curer">
                      <img src={curer} alt="" />
                      <div className="textSecond">
                        <p>
                          Курьерская доставка
                          <br />
                          <span className="highlight-text">400 руб.</span>
                        </p>
                      </div>
                    </button>
                    <button onClick={() => handleDos(0)} className="person">
                      <img src={person} alt="" />
                      <div className="textSecond">
                        <p>
                          Самовывоз
                          <br />
                          <span className="highlight-text">Бесплатно</span>
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="thithInput">
                  <p>Адрес доставки</p>
                  <input
                    type="text"
                    placeholder="Не нужно заполнять при самовывозе"
                  />
                </div>

                <div className="fourInput">
                  <div className="data">
                    <p>Дата получения</p>
                    <input type="number" placeholder="22.12.2021" />
                  </div>
                  <div className="clock">
                    <p>Время</p>
                    <input type="number" placeholder="12:00 - 16:00" />
                  </div>
                </div>

                <div className="fiveInput">
                  <p>Комментарий к заказe</p>
                  <input
                    type="text"
                    placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текстa oткрытки и другое."
                  />
                </div>

                <div className="sixInput">
                  <p>Метод оплаты</p>
                  <div className="checkboxs">
                    <input type="checkbox" />
                    <p>Оплата картой онлайн</p>
                    <input type="checkbox" />
                    <p>Наличными при получении</p>
                    <input type="checkbox" />
                    <p>Яндекс деньги</p>
                  </div>
                  <hr />
                  <div className="priceCheck">
                    <p className="piCheck">
                      Итоговая сумма заказа вместе с доставкой:
                    </p>
                    <span className="highlight-check">
                      {subtotal + dos} руб.
                    </span>
                  </div>
                  <hr />
                  <button>Оформить заказ</button>
                  <span className="bott">
                    Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с
                    Договором оферты и разрешаю обработку моих персональных
                    <br /> данных в соответствии с Политикой конфиденциальности
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="leftCon">
            <div className="itog">
              <h2>Итого</h2>
              <div className="textItog">
                <p>
                  Стоимость товаров
                  <br />
                  Скидка
                  <br />
                  Доставка
                </p>
                <span>
                  {subtotal}руб
                  <br />0 руб
                  <br />
                  {dos} руб
                </span>
              </div>
              <hr className="basket-hr" />
              <div className="priceItog">
                <p>К оплате</p>
                <span>{subtotal + dos}руб</span>
              </div>
              <div className="inp">
                <p>Промокод:</p>
                <input type="text" placeholder="Введите промокод" />
                <button>прменить</button>
              </div>
              <button className="itogButton">Оформить заказ</button>
            </div>
          </div>
        </section>
        <div className="display">
          <h1 className="h1">Популярные наборы</h1>
          <div className="products">
            {productsData.slice(0, 3).map((product, index) => (
              <div key={index} className="producter">
                <Link to={`/info/${product.id}`}>
                  <img
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
                      <img src={card} alt="Корзина" />В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bottomCon">
          <h1>Добавить в заказ</h1>
          <img className="gis" src={left} alt="" />
          <div className="category">
            <div className="one">
              <img src={one} alt="" />
              <p className="oneP">1 макарон и 1 эклер</p>
              <p className="onePi">промо-набор</p>
              <hr />
              <div className="oneButton">
                <p>160 руб
                  <br />
                  <span>90 руб</span>
                </p>
                <div class="vertical-line"></div>
                <button>В корзину</button>
              </div>
            </div>
            <div className="two">
              <img src={two} alt="" />
              <div className="left">
                <h2>Всего понемногу</h2>
                <p>
                  3 эклера, 4 трубочки, 6 макарун.
                  <br />
                  Вкусы: клубника - базилик, кокос,
                  <br />
                  голубой сыр, пармезан
                </p>
              </div>
              <hr />
              <div className="oneButton2">
                <span className="spanButton">750 руб</span>
                <div class="vertical-line"></div>
                <button >В корзину</button></div>

            </div>
            <div className="three">
              <img src={thre} alt="" />
              <div className="left">
                <h2>Ещё побольше</h2>
                <p>
                  3 эклера, 4 трубочки, 6 макарун.
                  <br />
                  Вкусы: клубника - базилик, кокос,
                  <br />
                  голубой сыр, пармезан
                </p>
              </div>
              <hr />
              <div className="oneButton2">
                <span className="spanButton">3900 руб</span>
                <div class="vertical-line"></div>
                <button >В корзину</button></div>

            </div>
            <div className="four">
              <img src={foure} alt="" />
              <div className="left">
                <h2>Ещё побольше</h2>
                <p>
                  3 эклера, 4 трубочки, 6 макарун.
                  <br />
                  Вкусы: клубника - базилик, кокос,
                  <br />
                  голубой сыр, пармезан
                </p>
              </div>
              <hr />
              <div className="oneButton2">
                <span className="spanButton">3900 руб</span>
                <div class="vertical-line"></div>
                <button >В корзину</button></div>

            </div>
          </div>
          <img className="gisTo" src={rigth} alt="" />
        </div> */}
      </Container>
    </div>
  );
};

export default BasketPage;
