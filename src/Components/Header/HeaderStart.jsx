import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import local from "../../assets/bekjan/svg/local.svg"
import phone from "../../assets/bekjan/svg/phone.svg"
import card from "../../assets/bekjan/svg/card.svg"
import telegram from "../../assets/bekjan/svg/telegram.svg"
import wkontakt from "../../assets/bekjan/svg/wkontakt.svg"
import odnaklass from "../../assets/bekjan/svg/odnaklass.svg"
import { RxAvatar } from "react-icons/rx";
import {useSelector } from "react-redux";
import "./Header.css"

function HeaderStart() {
  const totalItem = useSelector ((state ) => state.cart.totalItems)
  return (
    <div className="color">
      <Container>
        <div className="header-color">
          <Link to="/no-page">
            <p>Гарантия свежести </p>
          </Link>
          <Link to="/deliv">
            <p>Доставка и оплата  </p>
          </Link>
          <Link to="/no-page">
            <p> Оптовые поставки</p>
          </Link>
          <Link to="/no-page">
            <p>Контакты</p>
          </Link>
          <div className="location">
            <img className="img" src={local} alt="img" />
            <select className="local" name="location" id="local">
              <option value="location">Санкт-Петербург</option>
              <option value="location">Санкт-Петербург</option>
              <option value="location">Санкт-Петербург</option>
              <option value="location">Санкт-Петербург</option>
            </select>
          </div>
          <div className="phone">
            <img className="img" src={phone} alt="img" />
            <p>8 812 309-82-88</p>
          </div>

          <button className="header-btn">
          <div className="phone">
            <Link to="/basket">
              <img className="cart-img" src={card} alt="img" />
              <div className="cart-quantity">
              <p className="basket-quantity">{totalItem}</p>
              </div>
            </Link>
            <p>В корзине ({totalItem} товара)</p>
          </div>
          </button>
          <div className="logos">
            <Link to="/NotFound">
              <img className="img" src={telegram} alt="img" />
            </Link>
            <Link to="/NotFound">
              <img className="img" src={wkontakt} alt="img" />
            </Link>
            <Link to="/NotFound">
              <img className="img" src={odnaklass} alt="img" />
            </Link>
          </div>
          <Link to="/Profile">
            <RxAvatar className="avatar" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default HeaderStart;
