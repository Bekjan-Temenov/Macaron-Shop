import makaron from "../../../assets/aftandil/img/makaron.png";
import { Container } from '../../Container/Container';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

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
          <form >
            <div className='form'>
              <div className="form-group">
                <div className='form-input'>
                  <p>Ваше имя</p>
                  <input type="text" placeholder="Укажите имя" required />
                </div>
                <div className='form-input'>
                  <p>Ваш телефон</p>
                  <input type="text" placeholder="+7 (___) ___-__-__" required />
                </div>

                <div className='form-input'>
                  <p>E-mail</p>
                  <input type="text" placeholder="Ваш телефон" required />
                </div>
              </div>
              <div className="form-group">
                <div className='form-input'>
                  <p>Город</p>
                  <input type="text" placeholder="Компания" required />
                </div>
                <div className='form-input'>
                  <p>Компания</p>
                  <input type="email" placeholder="E-mail" required />
                </div>
                <div className='form-input'>
                  <p>Придумайте пароль</p>
                  <input type="password" placeholder="Придумайте пароль" required />
                </div>
              </div>
            </div>
            <button type="submit">Отправить заявку на регистрацию</button>
          </form>
          <div className="login-link"><p>Уже зарегистрированы? <Link to="/sign-in">Войти</Link></p></div>
          <div className="disclaimer">
            <p>
              Нажимая на кнопку Отправить заявку на регистрацию , я принимаю и соглашаюсь с
              <a href="#">Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с
              <a href="#">Политикой конфиденциальности</a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RegistrationForm;
