import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/action';
import { Container } from '../../Container/Container';
import { Link } from 'react-router-dom';
import makaron from "../../../assets/aftandil/img/makaron.png";
import './RegistrationForm.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { signup: { status, message: error} } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert('Passwords do not match!');
      return;
    }

    dispatch(registerUser(formData));
  };

  return (
    <Container>
      <div className="container2">
        <div className="header2">
          <img src={makaron} alt="" className="header-img" />
        </div>
        <div className="form-container">
          <h1>Получите доступ к оптовым ценам</h1>
          <p>Пройдите регистрацию</p>
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className="form-group">
                <div className='form-input'>
                  <p className='p'>Ваше имя</p>
                  <input
                  className='input'

                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.first_name}
                    required
                  />
                </div>
                <div className='form-input'>
                  <p>Фамилия</p>
                  <input 
                  className='input'
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-input'>
                  <p>E-mail</p>
                  <input
                  className='input'
                    type="email"
                    name="email"
                    placeholder="Ваш e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-input'>
                  <p>Пароль</p>
                  <input className='input'
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-input'>
                  <p>Повторите пароль</p>
                  <input className='input'
                    type="password"
                    name="password_confirmation"
                    placeholder="Повторите пароль"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button className="btn" type="submit">Отправить заявку на регистрацию</button>
          </form>
          {status === 'LOADING' && <p>Loading...</p>}
          {status === 'ERROR' && <p>Error: {JSON.stringify(error)}</p>}
          <div className="login-link">
            <p className='p'>Уже зарегистрированы? <Link to="/sign-in">Войти</Link></p>
          </div>
          <div className="disclaimer">
            <p className='p'>
              Нажимая на кнопку Отправить заявку на регистрацию, я принимаю и соглашаюсь с <a href="#">Договором оферты</a> и разрешаю обработку моих персональных данных в соответствии с <a href="#">Политикой конфиденциальности</a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default RegistrationForm;