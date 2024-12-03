import './ForgotCom.css';
import makaron from "../../../assets/aftandil/img/makaron.png";
import { Link } from 'react-router-dom';


const ForgotCom = () => {
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
        <div className="login-body ">
          <form>
            <h2>Забыли пароль?</h2>
            <div className="form-footer">
              <p className='email'>E-mail</p>
              <input className='input' type='email' placeholder='Email' />
              <Link to="/sign-in/password/no">
                <button type="submit" className="login-button">продолжить</button>
              </Link>
            </div>
          </form>   
          <div className="signup-link">
            <Link to="/sign-up">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotCom;
