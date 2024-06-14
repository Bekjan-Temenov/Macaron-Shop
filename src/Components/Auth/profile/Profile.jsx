import React from "react";
import { Container } from "../../Container/Container";

import profiles from "../../../assets/aftandil/svg/profiles.svg";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container>
      <div className="Profile">
        <Link to="/Photo">
          <img className="Profile__image" src={profiles} alt="" />
        </Link>

        <div className="inp_main">
          <div className="inProfile">
            <input className="inp" type="text" placeholder="имя" required />
            <input
              className="inp_2"
              type="text"
              placeholder="фамилия"
              required
            />
          </div>
          <div className="inProfile2">
            <input
              className="inp_3"
              type="text"
              placeholder="@gmail"
              required
            />
            <input
              className="inp_4"
              type="text"
              placeholder="номер вашего сотового телефона"
              required
            />
            <label for="myfile">Выберите файл:</label>
            <input  type="file" id="myfile" name="myfile"></input>
            <Link to="/">
            <button>готово</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
