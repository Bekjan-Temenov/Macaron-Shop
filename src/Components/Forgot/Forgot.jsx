import React from 'react';
import './Forgot.css';
import makaron from '../../assets/aftandil/img/makaron.png';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img 
            src={makaron} 
            alt="Macarons" 
            className="macaron-image" 
          />
        </div>
        <div className="login-body">
          <h2>Забыли пароль?</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-footer">
              <Link to="/ForgotCom">
                <button type="submit" className="login-button">продолжить</button>
              </Link>
            </div>
          </form>
          <div className="signup-link">
            Ещё не зарегистрированы? <Link to="/RegistrationForm">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
