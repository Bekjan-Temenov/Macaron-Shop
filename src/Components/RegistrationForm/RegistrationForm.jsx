import React from 'react';
import './RegistrationForm.css';
import makaron from '../../assets/aftandil/img/makaron.png'
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <Container >

    <div className="container2">
      <div className="hear2">
        <img src={makaron} alt="" className="header-img" />
      </div>
      <div className="form-container">
        <h1>Получите доступ к оптовым ценам</h1>
        <p>Пройдите регистрацию</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Ваше имя" required />
            <input type="text" placeholder="Город" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Ваш телефон" required />
            <input type="text" placeholder="Компания" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Придумайте пароль" required />
          </div>
          <button type="submit">Отправить заявку на регистрацию</button>
        </form>
        <p className="login-link">Уже зарегистрированы? <Link to="/Login">Войти</Link></p>
        <p className="disclaimer">
          Нажимая на кнопку "Отправить заявку на регистрацию", я принимаю и соглашаюсь с 
          <a href="#">Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с 
          <a href="#">Политикой конфиденциальности</a>
        </p>
      </div>
    </div>
    </Container>
  );
}

export default RegistrationForm;
