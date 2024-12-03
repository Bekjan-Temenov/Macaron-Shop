import React  from 'react';
import { Link } from 'react-router-dom';

const MacaronOrder = ({open ,setOpen}) => {
//  const {open , setOpen} = props

const handleModalClick = (e) => {
    e.stopPropagation(); 
    setOpen(true); 
  };
  return (
    <div onClick={() => setOpen(false)} className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">

    <div onClick={handleModalClick} className="bg-white p-6 rounded-lg shadow-lg text-center ">
      <h2 className="text-xl font-semibold mb-4">Ваш выбор:</h2>
      <p className="mb-2">
        Набор макарон 9 шт. с индивидуальным дизайном{" "}
        <span className="text-pink-500">950 руб.</span>
      </p>
      <p className="mb-4">
        Открытка с пожеланием <span className="text-pink-500">30 руб.</span>
      </p>
      <p className="font-semibold mb-6">
        Итого: <span className="text-pink-500">980 руб.</span>
      </p>
      <div className="flex justify-between">
        <Link to="/basket">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Добавить в корзину
        </button>
        </Link>
        <button className="bg-pink-500 text-white px-4 py-2 rounded">
          Оформить сейчас
        </button>
      </div>
    </div>
  </div>
  );
};

export default MacaronOrder;
