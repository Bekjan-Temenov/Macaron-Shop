// src/NotFound.js
import React from 'react';
import nodfound from '../../assets/aftandil/svg/nodfound.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <img className="w-1/2 h-auto mb-4" src={nodfound} alt="Not Found" />
        <Link to="/">
          <button className="bg-custom-pink text-white px-4 py-2 rounded bg-pink-700 transition duration-300">
            Назад
          </button>
        </Link>
        <div className="mt-4"></div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
