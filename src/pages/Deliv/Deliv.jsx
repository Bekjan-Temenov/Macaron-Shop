import React from 'react';
import { Container } from '../../Components/Container/Container';
import bike from '../../Components/image/bike.png';
import list from '../../Components/image/list.png';
import mac1 from '../../Components/image/mac1.png';
import mac2 from '../../Components/image/mac2.png';
import section from '../../Components/image/section.png';
import cut from '../../Components/image/cut.png';
import macaron from '../../Components/image/macaron.png';
import layer from '../../Components/image/layer.png';
import gis2 from '../../Components/image/gis2.png';
import './Deliv.css';
import { Link } from 'react-router-dom';

const Deliv = () => {
    return (
        <div className="containerDeliv">
            <Container>
                <div className='deliv-texts'>
                    <Link to="/">
                        <p>Главная ></p>
                    </Link>
                    <Link>
                        <span>Доставка и оплата</span>
                    </Link>
                </div>
                <div className="head">
                    <div className="headImg">
                        <img className='bike' src={bike} alt="Bike" />
                        <img className='list' src={list} alt="List" />
                        <img className='mac1' src={mac1} alt="Mac1" />
                        <img className='mac2' src={mac2} alt="Mac2" />
                    </div>
                    <div className="headText">
                        <h1>Доставка и оплата</h1>
                        <p>Для наших покупателей доступны 2 способа доставки:
                            <br />курьерская доставка по Санкт-Петербургу в пределах
                            <br />КАД и самовывоз.</p>
                        <h2>Курьерская доставка:</h2>
                        <span>Курьеры работают каждый день с 11 до 21 часа.
                            <br />Доставка макарон осуществляется только по
                            <br />Санкт-Петербургу в пределах кольцевой автомобильной
                            <br />дороги (КАД). Точная зона доставки.
                            <br />Если Вы готовы принять заказ в интервале с 12 до 17 часов
                            <br />или с 17 до 21 часа, то доставка будет стоить 300 рублей.
                            <br />При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.
                            <br />При оформлении заказа до 15 часов возможна доставка
                            <br />в тот же день в промежутке с 17 до 21 часа.
                            <br />Курьер предупредит Вас о своём прибытии за 30-40 минут.</span>
                    </div>
                </div>
            </Container>
            <section>
                <div className="headSection">
                    <img className="sectionImg" src={section} alt="Section" />
                    <div className="textSection">
                        <h2>Самовывоз</h2>
                        <p>Вы можете сделать заказ и забрать его самостоятельно с
                            <br />нашего производства по адресу: ул. Маршала Тухачевского 22
                            <br />БЦ "Сова".
                            <br /><br />Заказ необходимо сделать до 20 часов, чтобы забрать его на
                            <br />следующий день в пункте самовывоза в любое удобное время
                            <br />в промежутке с 13 до 22 часов.
                            <br />Оплатить заказ банковской картой можно заранее при
                            <br />оформлении. Непосредственно при получении банковской
                            <br />картой расплатиться нельзя.
                        </p>
                        <h2>Оплата</h2>
                        <span>Вы можете оплатить заказ при получении наличными или
                            <br />заранее оплатить заказ банковской картой.
                            <br /><br />Для этого укажите выбранный способ при оформлении заказа.
                            <br />Оплата банковской картой удобна, если вы хотите отправить
                            <br />десерты в подарок или не желаете возиться с наличными при
                            <br />получении заказа.
                            <br /><br />Если у Вас нет карты российского банка, мы можем принять
                            <br />оплату через платёжную систему PayPal.
                        </span>
                    </div>
                    <div className="imgSection">
                        <img className="layer" src={layer} alt="Layer" />
                        <img className="cut" src={cut} alt="Cut" />
                        <img className="macaron" src={macaron} alt="Macaron" />
                    </div>
                </div>
            </section>
            <div className="footerImg">
                <img src={gis2} alt="GIS" />
            </div>
        </div>
    );
}

export default Deliv;
