import React from "react";
import { Container } from "./../Container/Container";
import Infoimg from "./Info-img";
import InfoText from "./Info-Text";
import IfonDescription from "./Ifon-Description";

function Info() {
  return (
    <Container>
      <div className="info-content">
        <Infoimg />
        <InfoText />
        <IfonDescription />
      </div>
    </Container>
  );
}

export default Info;
