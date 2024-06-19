import "./Basket.css"
import { Container } from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import first from '../../Components/image/first.png';
import second from '../../Components/image/second.png';
import center from '../../Components/image/center.png';
import three from '../../Components/image/three.png';
import four from '../../Components/image/fourth.png';
import curer from '../../Components/image/curer.png';
import person from '../../Components/image/person.png';
import one from '../../Components/image/one.png';
import two from '../../Components/image/two.png';
import thre from '../../Components/image/thre.png';
import foure from '../../Components/image/four.png';
import left from '../../Components/image/left.png';
import rigth from '../../Components/image/rigth.png';

const BasketPage = () => {
  const { carts } = useSelector((state) => state.cart)
  // const dispatch = useDispatch()

  return (
    <Container>
      <div className='container'>
        <h1>Ваша корзина</h1>
        <section>
          <div className="rigthCon">
            <div className="first">
              <div className='value'>
                {
                  carts.map((item, index) => (<>
                    <div className="box">
                      <img className='imeg' src={item.img} alt="" />
                      <div className="texts">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="miniBox">
                        <button>-</button>
                        1
                        <button>+</button>
                      </div>
                      <div className="priceBoxx">
                        <p><span className="highlight-price">{item.price} руб.</span></p>
                      </div>
                      <button className="dell">
                        <img src="https://www.svgrepo.com/show/499592/close-x.svg" alt="img" />
                      </button>
                    </div>
                    <hr />
                  </>))
                }
              </div>

              <div className="center">
                <img src={center} alt="" />
              </div>

              <div className="additi">
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
              </div>

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
                    <div className="curer">
                      <img src={curer} alt="" />
                      <div className="textSecond">
                        <p>Курьерская доставка
                          <br />
                          <span className="highlight-text">
                            400 руб.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="person">
                      <img src={person} alt="" />
                      <div className="textSecond">
                        <p>Самовывоз
                          <br />
                          <span className="highlight-text">
                            Бесплатно
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="thithInput">
                  <p>Адрес доставки</p>
                  <input type="text"
                    placeholder="Не нужно заполнять при самовывозе"
                  />
                </div>

                <div className="fourInput">
                  <div className="data">
                    <p>Дата получения</p>
                    <input type="number"
                      placeholder="22.12.2021" />
                  </div>
                  <div className="clock">
                    <p>Время</p>
                    <input type="number"
                      placeholder="12:00 - 16:00" />
                  </div>
                </div>


                <div className="fiveInput">
                  <p>Комментарий к заказe</p>
                  <input type="text"
                    placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текстa oткрытки и другое." />
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
                    <p className="piCheck">Итоговая сумма заказа вместе с доставкой:</p>
                    <span className="highlight-check">1400 руб.</span>
                  </div>
                  <hr />
                  <button>Оформить заказ</button>
                  <span className="bott">Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных
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
                <p>Стоимость товаров<br />Скидка<br />Доставка</p>
                <span>700 руб<br />0 руб<br />400 руб</span>
              </div>
              <hr />
              <div className="priceItog">
                <p>К оплате</p>
                <span>1100 руб</span>
              </div>
              <hr />
              <div className="inp">
                <p>Промокод:</p>
                <input
                  type="text"
                  placeholder="Введите промокод" />
                <button>прменить</button>
              </div>
              <button className="itogButton">
                Оформить заказ
              </button>
            </div>
          </div>
        </section>
        <div className="bottomCon">
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
        </div>
      </div>
    </Container>

  )
}

export default BasketPage