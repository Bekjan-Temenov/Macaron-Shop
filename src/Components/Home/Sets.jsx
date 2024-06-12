import { Container } from "../Container/Container"
import logo from "../../assets/bekjan/svg/setslogo.svg"
import logo1 from "../../assets/bekjan/svg/logo1.svg"
import logo2 from "../../assets/bekjan/svg/logo2.svg"
import logo3 from "../../assets/bekjan/svg/logo3.svg"
import logo4 from "../../assets/bekjan/svg/logo4.svg"
import logo5 from "../../assets/bekjan/svg/logo5.svg"
import arrow from "../../assets/bekjan/svg/arrow.svg"
function Sets() {
    return (
        <Container>
            <div className="sets">
                <div className="usesets">
                    <div className="circle">
                        <img src={logo} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Готовые наборы</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.</p>
                </div>

                <div className="usesets">
                    <div className="circle">
                        <img src={logo1} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Собрать свой набор</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>Выбрать количество макарун, и выбрать вкусы</p>
                </div>

                <div className="usesets">
                    <div className="circle">
                        <img src={logo2} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Набор с индивидуальной печатью</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>Собрать набор макарон с уникальным дизайном. </p>
                </div>

                <div className="usesets">
                    <div className="circle">
                        <img src={logo3} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Свадебные предложения</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества</p>
                </div>

                <div className="usesets">
                    <div className="circle">
                        <img src={logo4} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Корпоративные подарки</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров</p>
                </div>

                <div className="usesets">
                    <div className="circle">
                        <img src={logo5} alt="img" />
                    </div>
                    <div className="arrow">
                        <h1>Оптовые поставки</h1>
                        <img src={arrow} alt="img" />
                    </div>
                    <p>Предложение для кофеен, кафе, отелей и т.д.
                        Посмотрите условия сотрудничества и отзывы.</p>
                </div>
            </div>
        </Container>
    );
}

export default Sets;
