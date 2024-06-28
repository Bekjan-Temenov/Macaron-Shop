import React, { useState, useEffect } from "react";
import { Container } from "../../Container/Container";
import { Link } from "react-router-dom";

import profiles from "../../../assets/aftandil/svg/profiles.svg";
import "./Profile.css";

function Profile() {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || profiles
  );

  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <div className="Profile">
        <img className="Profile__image" src={profileImage} alt="Profile" />

        <div className="inp_main">
          <div className="inProfile">
            <input className="inp_2" type="text" placeholder="имя" required />
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
              <label className="input__profile-label" htmlFor="myfile">
                Выберите файл:
              </label>
              <input
                className="input__profile"
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleImageChange}
              />
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