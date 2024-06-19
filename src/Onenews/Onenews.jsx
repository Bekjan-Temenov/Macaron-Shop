import React from 'react'
import './Onenews.css'
import { Container } from '../Components/Container/Container'
import foto from '../assets/aftandil/svg/foto.svg'
import svg from '../assets/aftandil/svg/svg.svg'

const onenews = () => {
  return (
    <Container>
         <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#8march">8 марта</a></li>
            <li><a href="#spring">Весна</a></li>
            <li><a href="#gifts">Подарки и акции</a></li>
          </ul>
        </nav>
      </header>

      <section className="main-section">
        <div className="text-section">
          <h1>Скоро главный праздник весны!</h1>
          <p>
            Совсем скоро любимый весенний праздник. А мы уже подготовили
            коллекцию праздничных макаронс к срущимися подарками!
          </p>
          <p>
            Праздники вызывают восторг у каждого, ведь они не только красивые, но и вкусные!
            Только в «Макаронс» используются найнатуральные ингридиенты!
          </p>
          <h2>Скоро главный праздник весны! H2</h2>
        </div>
        <div className="image-section">
          <img src={foto} alt="Spring celebration" />
        </div>
      </section>

      <section className="gifts-section">
        <h2>Некоторые варианты подарков:</h2>
        <ul>
          <li>Набор из 16 макаронс - 3600 рублей</li>
          <li>Набор из 24 макаронс - 5400 рублей</li>
          <li>Набор макаронс и кофе - 4500-5900 рублей</li>
          <li>Набор макаронс и шоколад - 4800-5900 рублей</li>
          <li>Набор на 3 человека - 900 рублей</li>
          <li>Набор на 3-2 - 800 рублей</li>
        </ul>
        <div className="gift-images">
          <img src={svg} alt="Gift 1" />
          <img src={svg} alt="Gift 2" />
          <img src={svg} alt="Gift 3" />
        </div>
      </section>

      <section className="contact-section">
        <h2>Заказать расчёт или отправить запрос на сотрудничество</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" name="name" placeholder="Укажите имя" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Название компании</label>
            <input type="text" id="company" name="company" placeholder="Название компании" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Ваш телефон</label>
            <input type="tel" id="phone" name="phone" placeholder="+7 (__) ___-__-__" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="E-mail" required />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Добавить комментарий</label>
            <input type="text" id="comments" name="comments" placeholder="Добавить комментарий" />
          </div>
          <button type="submit">Заказать расчёт</button>
        </form>
      </section>

     
    </div>
    </Container>
  )
}

export default onenews