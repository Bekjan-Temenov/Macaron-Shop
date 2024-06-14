import makaron from "../../../assets/aftandil/img/makaron.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-box">
      <div className="login-header">
        <img src={makaron} alt="Macarons" className="macaron-image" />
      </div>
      <div className="login-body">
        <h2>Вход</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-footer">
            <Link to="/sign-in/password" className="form-link">Забыли_пароль?</Link>
            <button type="submit" className="login-button">
              Вход
            </button>
          </div>
        </form>
        <div className="sign-up-link">
          Ещё не зарегистрированы?{" "}
          <Link to="/sign-up">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
