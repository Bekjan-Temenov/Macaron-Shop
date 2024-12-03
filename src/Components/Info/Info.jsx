import "./Info.css"
import { Container } from "./../Container/Container";
import Infoimg from "./Info-img";
import InfoText from "./Info-Text";
import IfonDescription from "./Ifon-Description";
import { NavLink } from "react-router-dom";

function Info() {
  return (
    <div className="info">

      <Container>
        <div style={{ textAlign: "center", padding: "30px 0px", display: "flex", alignItems: "center", justifyContent: "center", gap: "3px", textDecoration: "none" }}>
          <NavLink to={"/"}>
            <p>Главная ></p>
          </NavLink>
          <NavLink>
            <p>Готовые наборы ></p>
          </NavLink>
          <NavLink>
            <p>Сердце</p></NavLink></div>
        <div className="info-content ">
          <Infoimg />
          <InfoText />
        </div>
        <IfonDescription />
        <h1 style={{ textAlign: "center", color: "#292929", fontSize: "30px", fontWeight: "600", paddingTop: "30px" }}>Вам могут понравиться</h1>

        <p style={{ textAlign: "center", marginTop: "30px" }}><button style={{ padding: "16px 24px", background: "none", border: "1px solid #4E9DD3", width: "289px", color: "black" }}>Все готовые наборы </button></p>
      </Container>
    </div>
  );
}
export default Info;