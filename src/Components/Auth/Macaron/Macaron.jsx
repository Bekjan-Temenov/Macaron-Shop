import React, { useState } from 'react';
import { Container } from '../../Container/Container';
import './Macaron.css';
import macChocolateBanana from '../../../assets/aftandil/img/macChocolateBanana.png';
import seaBuckthornRosemary from '../../../assets/aftandil/svg/sea.svg';
import blackTruffle from '../../../assets/aftandil/svg/truffaele.svg';
import blueCheese from '../../../assets/aftandil/svg/cgeese.svg';
import parmesan from '../../../assets/aftandil/svg/parmesan.svg';
import pesto from '../../../assets/aftandil/svg/pesto.svg';

const Macaron = () => {
  const [items, setItems] = useState({
    'Ананас': 1,
    'Яблоко': 1,
    'Вишня': 1,
    'Кокос': 1,
    'Пармезан': 1,
    'Чесночок': 3,
  });
  
  const totalItems = Object.values(items).reduce((a, b) => a + b, 0);
  const totalPrice = 700; // Это статическая цена, как указано в примере

  const increment = (item) => {
    setItems({ ...items, [item]: items[item] + 1 });
  };

  const decrement = (item) => {
    if (items[item] > 0) {
      setItems({ ...items, [item]: items[item] - 1 });
    }
  };

  const flavors = [
    {
      name: 'Шоколад, банан',
      description: 'Сезонный вкус: молочный шоколад, спелые бананы',
      id: 1,
      img: macChocolateBanana,
    },
    {
      name: 'Облепиха, розмарин',
      description: 'Сезонный вкус: белый шоколад, свежая облепиха, немного розмарина',
      id: 2,
      img: seaBuckthornRosemary,
    },
    {
      name: 'Чёрный трюфель',
      description: 'Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля',
      id: 3,
      img: blackTruffle,
    },
    {
      name: 'Голубой сыр',
      description: 'Наш самый пикантный и один из самых пикантных вкусов. Это нужно попробовать!',
      id: 4,
      img: blueCheese,
    },
    {
      name: 'Пармезан',
      description: 'Пикантный сладко-соленый вкус. Нежная изготавливается с использованием местного итальянского сыра Parmigiano Reggiano и Grana Padano категории DOP.',
      id: 5,
      img: parmesan,
    },
    {
      name: 'Песто',
      description: 'Внутри ингредиенты классического песто - свежий ароматный базилик, итальянский пармезан, кедровые орешки и всё это в виде ганаша на белом шоколаде.',
      id: 6,
      img: pesto,
    },
  ];

  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [total, setTotal] = useState(0);

  const handleAddFlavor = (id) => {
    const newSelectedFlavors = { ...selectedFlavors };
    if (newSelectedFlavors[id]) {
      newSelectedFlavors[id]++;
    } else {
      newSelectedFlavors[id] = 1;
    }
    setSelectedFlavors(newSelectedFlavors);
    setTotal(total + 1);
  };

  const handleRemoveFlavor = (id) => {
    const newSelectedFlavors = { ...selectedFlavors };
    if (newSelectedFlavors[id] > 0) {
      newSelectedFlavors[id]--;
      setSelectedFlavors(newSelectedFlavors);
      setTotal(total - 1);
    }
  };

  return (
    <Container>
      <div className="app ">
        <div className="app-text">
          <h1>Выберите вкусы</h1>
          <div className="flavor-list">
            {flavors.map((flavor) => (
              <div key={flavor.id} className="flavor-item">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  className="flavor-image"
                />
                <h2>{flavor.name}</h2>
                <p>{flavor.description}</p>
                <div className="counter">
                  <button onClick={() => handleRemoveFlavor(flavor.id)}>
                    -
                  </button>
                  <span>{selectedFlavors[flavor.id] || 0}</span>
                  <button onClick={() => handleAddFlavor(flavor.id)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white p-4 rounded shadow-md">
          <div className="text-lg font-bold mb-4">
            {totalItems} из 12 шт. {totalPrice} руб.
          </div>
          {Object.keys(items).map((item) => (
            <div key={item} className="flex justify-between items-center mb-2">
              <span>{item}</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => decrement(item)}
                >
                  -
                </button>
                <span className="mx-2">{items[item]}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => increment(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
         <div className="flex items-center   bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <p className="mb-4 text-gray-700">
          Для продолжения количество макарун должно равняться 12 шт
        </p>
        <button className="w-full px-4 py-2 mb-2 text-white bg-pink-500 rounded-md hover:bg-pink-600">
          Оформить заказ
        </button>
        <button className="w-full px-4 py-2 text-pink-500 border border-pink-500 rounded-md hover:bg-pink-100">
          Собрать еще набор
        </button>
      </div>
    </div>
          </div>
        </div>

    </Container>
  );
};

export default Macaron;
