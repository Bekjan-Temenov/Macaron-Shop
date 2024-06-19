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
           <div className="input__profile-wrapper">
      <label className="input__profile-label" htmlFor="myfile">Выберите файл:</label>
      <input className="input__profile" type="file" id="myfile" name="myfile" />
      <label htmlFor="myfile" className="custom-file-upload">
        Выбрать файл
      </label>
      <Link to="/">
        <button className="btn_2">Готово</button>
      </Link>
    </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
