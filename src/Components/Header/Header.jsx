import { Container } from "../Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bekjan/svg/logo.svg";
import dni from "../../assets/bekjan/svg/dni.svg";
import HeaderStart from "./HeaderStart";
import Advertising from "./Advertising";
import "./Header.css";

function Header() {
  const [color, setColor] = useState(7);

  const handleColor = (index) => {
    setColor(index);
  };

  return (
    <>
      <Advertising />
      <HeaderStart />
      <Container>
        <div className="header-logo">
          <ul>
            <Link to="/no-page">
              <div className="dni">
                <p
                  onClick={() => handleColor(0)}
                  className={color === 0 ? "li" : "header-p"}
                >
                  Сладкие дни
                </p>
                <img src={dni} alt="img" />
              </div>
            </Link>
            <select className="header-p" name="cars" id="cars">
              <option value="volvo">подарочные наборы</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <Link to="/no-page">
              <p
                onClick={() => handleColor(1)}
                className={color === 1 ? "li" : "header-p"}
              >
                Собрать набор
              </p>
            </Link>
            <Link to="/">
              <img src={logo} alt="img" />
            </Link>
            <Link to="/no-page">
              <p
                onClick={() => handleColor(2)}
                className={color === 2 ? "li" : "header-p"}
              >
                Создать дизайн
              </p>
            </Link>
            <select className="header-p" name="cars" id="cars">
              <option value="volvo">КОМПАНИЯМ</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select className="header-p" name="cars" id="cars">
              <option value="volvo">ВЕСЬ КАТАЛОГ</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </ul>
        </div>
      </Container>
    </>
  );
}
export default Header;
