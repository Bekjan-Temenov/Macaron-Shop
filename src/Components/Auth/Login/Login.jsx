import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/action';
import { logout } from "../store/slice";
import makaron from "../../../assets/aftandil/img/makaron.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { refresh,access, status, error } = useSelector((state) => state.auth.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh');
    const accessToken = localStorage.getItem('access');
    if (refreshToken) {
      console.log('Token from localStorage:', refreshToken);
    }
    if (accessToken) {
      console.log('Token from localStorage:', accessToken);
    }
  }, []);

  return (
    <div className="login-box">
      <div className="login-header">
        <img src={makaron} alt="Macarons" className="macaron-image" />
      </div>
      <div className="login-body">
        <h2>Вход</h2>
        {access ? (
          <div>
            <p>Login successful! Token: {access}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
              className="form-group-inputs"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
              className="form-group-inputs"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-footer">
              <Link to="/sign-in/password" className="form-link">Забыли_пароль?</Link>
              <button type="submit" className="login-button">
                Вход
              </button>
            </div>
          </form>
        )}
        {status === 'LOADING' && <p>Loading...</p>}
        {status === 'ERROR' && <p>Error: {error}</p>}
        <div className="sign-up-link">
          Ещё не зарегистрированы?{" "}
          <Link to="/sign-up">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
