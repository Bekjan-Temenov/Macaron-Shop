import React from 'react';
import mac_mak from '../../../assets/aftandil/svg/mac__mak.svg';
import image1 from '../../../assets/aftandil/svg/image2.svg';
import image2 from '../../../assets/aftandil/svg/image2.svg';
import image3 from '../../../assets/aftandil/svg/image3.svg';
import image5 from '../../../assets/aftandil/svg/image5.svg';
import image6 from '../../../assets/aftandil/svg/image6.svg';

const desserts = [
  { name: 'Трубочки со сгущенкой', image: image1 },
  { name: 'Эклеры', image: image2 },
  { name: 'Профитроли', image: image3 },
];

const comboSets = [
  { name: '1 макарон и 1 эклер', price: 90, oldPrice: 160, image: mac_mak },
  { name: 'Всего понемногу', price: 750, image: image5 },
  { name: 'Ещё побольше', price: 3900, image: image6 },
];

const Desserts = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Каталог десертов</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-3 text-center bg-pink-200 p-8 rounded-lg">ё
          <img src={mac_mak} alt="Макаруны" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Пирожные макарон</h2>
          <p className="my-4">Самые классные, самые лучшие, свежие, воздушные, хрустящие макаруны. Лучшее, что мы умеем делать.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Готовые наборы</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Собрать свой набор</button>
          </div>
        </div>
        {desserts.map((dessert, index) => (
          <div key={index} className="bg-orange-200 p-4 rounded-lg text-center">
            <img src={dessert.image} alt={dessert.name} className="mx-auto mb-4" />
            <h3 className="text-xl font-medium">{dessert.name}</h3>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center my-8">Хотите попробовать всё сразу?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {comboSets.map((set, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={set.image} alt={set.name} className="mx-auto mb-4" />
            <h3 className="text-xl font-medium text-center">{set.name}</h3>
            {set.oldPrice && (
              <p className="text-center line-through text-gray-500">{set.oldPrice} руб</p>
            )}
            <p className="text-center text-blue-500 font-bold">{set.price} руб</p>
            <button className="bg-blue-500 text-white py-2 px-4 w-full rounded mt-2">В корзину</button>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Все готовые наборы</button>
      </div>
    </div>
  );
};

export default Desserts;
