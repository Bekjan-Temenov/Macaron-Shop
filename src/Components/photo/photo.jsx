import React from "react";
import { Container } from "../Container/Container";
import photo from '../../assets/aftandil/svg/photo.svg'
import photo2 from '../../assets/aftandil/svg/photo2.svg'
import photo3 from '../../assets/aftandil/svg/photo3.svg'
import photo4 from '../../assets/aftandil/svg/photo4.svg'
import photo5 from '../../assets/aftandil/svg/photo5.svg'
import photo6 from '../../assets/aftandil/svg/photo6.svg'
import photo7 from '../../assets/aftandil/svg/photo7.svg'
import { Link } from "react-router-dom";
import './photo.css'

const Photo = () => {
  return (
    <Container>
      <div className="photo">
        <br />
        {/* <Link ></Link> */}
        <Link to="/Profile">
        <img src={photo} alt="" className="profile" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo2} alt="" className="profile2" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo3} alt="" className="profile3" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo4} alt="" className="profile4" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo5} alt="" className="profile5" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo6} alt="" className="profile6" />
        </Link>
        <br />
        <Link to="/Profile">
        <img src={photo7} alt="" className="profile7" />
        </Link>
        <Link to="/Profile">
        <button className="button2">назад</button>
        </Link>
      </div>
    </Container>
  );
};

export default Photo;
