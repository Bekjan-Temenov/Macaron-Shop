import './Forgot.css';
import makaron from "../../../assets/aftandil/img/makaron.png";
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
        <div className="password">
          <h1>Забыли пароль?</h1>
          <span>Инструкция по восстановлению пароля отправлена на указанный e-mail адрес. Проверьте новые письма.</span>
          <Link to="/">
            <button type="submit" className="login-button">продолжить</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
