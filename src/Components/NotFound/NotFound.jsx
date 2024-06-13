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
    <img className='image' src={nodfound  } alt="" />
      <Link to="/">
      <button className="back-button">Назад</button>
      </Link>
      <div className='j1'></div>
    </div>
    
    <Footer/>
    </>
  );
};

export default NotFound;
