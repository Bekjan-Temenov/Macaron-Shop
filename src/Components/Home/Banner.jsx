import { Container } from "../Container/Container";
import "./Home.css";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <div className="banners">
          <div className="banner-text">
            <div className="banner-texts">
              <h1>Macaronshop</h1>
            </div>
            <div className="lines">
              <div className="line"></div>
              <p>since 2013</p>
              <div className="line"></div>
            </div>
          </div>
          <div className="banner-flex">
            <h1>Настоящая любовь</h1>
            <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;

