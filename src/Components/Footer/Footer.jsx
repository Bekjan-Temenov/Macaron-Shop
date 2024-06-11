import { Container } from "../Container/Container";
import delivery from "../../assets/bekjan/svg/delivery.svg"
import handmade from "../../assets/bekjan/svg/hand.svg"
import natural from "../../assets/bekjan/svg/natural.svg"
import instagram from "../../assets/bekjan/svg/instagram.svg"
import facebook from "../../assets/bekjan/svg/facebook.svg"
import vk from "../../assets/bekjan/svg/wkont.svg"
import "./Footer.css"

function Footer() {
  return (
    <Container>
      <footer>
        <div className="footer-container">
          <div className="footer-icons">
            <div className="footer-flex">
              <div className="footer-ic">
                <div className="footer-icon">
                  <img src={handmade} alt="Готовим вручную и с любовью" />
                  <p>Готовим вручную и с любовью</p>
                </div>
                <div className="footer-icon">
                  <img src={delivery} alt="Доставим в день заказа" />
                  <p>Доставим в день заказа</p>
                </div>
                <div className="footer-icon">
                  <img src={natural} alt="100% миндальная мука и натуральные ингредиенты" />
                  <p>100% миндальная мука и натуральные ингредиенты</p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2021 Макароншоп ООО Квантум, Санкт-Петербург, улица Маршала Тухачевского, дом 22</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>ИНФОРМАЦИЯ</h3>
              <ul>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Гарантии вкуса и свежести</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>КАТАЛОГ</h3>
              <ul>
                <li><a href="#">Каталог десертов</a></li>
                <li><a href="#">Готовые наборы</a></li>
                <li><a href="#">Собрать свой набор</a></li>
                <li><a href="#">Наборы с печатью</a></li>
                <li><a href="#">Свадебные предложения</a></li>
                <li><a href="#">Акции</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>ДЛЯ БИЗНЕСА</h3>
              <ul>
                <li><a href="#">Корпоративные подарки</a></li>
                <li><a href="#">Для юридических лиц</a></li>
                <li><a href="#">Оптовикам</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <div className="footer-phone">
                <p>+7 (812) 309 82 88</p>
                <p>с 9:00 до 21:00</p>
              </div>
              <div className="social-icons">
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={vk} alt="VK" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
