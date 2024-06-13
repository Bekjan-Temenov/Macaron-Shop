// src/NotFound.js
import React from 'react';
import './NotFound.css';
import nodfound from '../../assets/aftandil/svg/nodfound.svg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className="not-found">
    <img src={nodfound  } alt="" />
      <p className='p1'>Извините, страница не найдена</p>
      <Link to="/">
      <button className="btn">Назад</button>
      </Link>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;
