import React from 'react';
import './ForgotCom.css';
import makaron from '../../assets/aftandil/img/makaron.png'
import { Link } from 'react-router-dom';


const ForgotCom = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img 
            src={makaron } 
            alt="Macarons" 
            className="macaron-image" 
          />
        </div>
        <div className="login-body">
          <form>
          <h2>Забыли пароль?</h2>
           
          
            <div className="form-footer">
            
              <button type="submit" className="login-button">продолжить</button>
            </div>
          </form>
          <div className="signup-link">
             <Link to="/RegistrationForm">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotCom;
