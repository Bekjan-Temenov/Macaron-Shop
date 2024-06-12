import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/bekjan/svg/logo.svg"
import dni from "../../assets/bekjan/svg/dni.svg"
import HeaderStart from "./HeaderStart";
import  Advertising  from "./Advertising";
import "./Header.css"

function Header() {
  return (
    <>
      <Advertising />
      <HeaderStart />
      <Container>
        <div className="header">
          <div className="header-logo">
            <Link to="/no-page">
              <div className="dni">
                <p className="header-p">Сладкие дни</p>
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
              <p className="header-p">Собрать набор</p>
            </Link>
            <Link to="/">
              <img src={logo} alt="img" />
            </Link>
            <Link to="/no-page">
              <p className="header-p">Создать дизайн</p>
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
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;