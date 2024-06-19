const productsData = [
  {
    id: 1,
    name: "Сердце",
    img: "https://macaronshop.ru/wp-content/uploads/2023/01/podarok-na-den-rogdeniya-3.png",
    imgs: [
      "../../assets/Sherniaz/svg/Rectangle322.svg",
      "../../assets/Sherniaz/svg/Rectangle322.svg",
      "../../assets/Sherniaz/svg/Rectangle322.svg"
    ],
    video: "",
    price: 2800,
    rating: 0,
    description: "40 макаронс в круглой коробке с персональной надписью",
    discount: 0,
    flavors: [
      { flavor: "Яблоко", quantity: "4 шт." },
      { flavor: "Вишня", quantity: "12 шт." },
      { flavor: "Кокос", quantity: "8 шт." }
    ],
    delivery: "Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2000 руб",
    pickup: "Самовывоз бесплатно через три часа после оплаты заказа",
    gift: "Можем преподнести как анонимный подарок"
  },
  {
    id: 2,
    name: "Звезда",
    img: "https://macaronshop.ru/wp-content/uploads/2024/05/nabor-macarons-1.png",
    imgs: [
      'https://i5.walmartimages.com/asr/cc4c52b0-60de-4ab9-adb3-9a887d9c98b6.bbed584d3d15ba4574f17b3cbf9f42f5.jpeg',
      'https://i5.walmartimages.com/seo/Seedra-Cilantro-Seeds-for-Planting-Indoor-and-Outdoor-Non-GMO-Heirloom-300-seeds-2-6-g-with-Instructions-1-Pack_b26345e8-70ed-4bb6-ac08-b49504c0ca70.ddd46da1cac90b6147861dde973257a4.jpeg',
      "https://i5.walmartimages.com/asr/85f27f3d-313b-412c-a347-d0418392432e.86d46bb7c027a0131b3d6b4eabaa12a2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/bebb1879-0b26-4a62-b248-0917e0b636fa.32eaae15ee7e1e30db8beaa5d6f9a72c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/13dcbf22-f9c8-4832-b287-68767ad26b18.ef66e7ce3349fef68ec725db05ff3837.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    ],
    video: "",
    price: 1800,
    rating: 0,
    description: "20 макаронс в форме звезды с уникальными вкусами",
    discount: 0,
    flavors: [
      { flavor: "Клубника", quantity: "6 шт." },
      { flavor: "Лимон", quantity: "8 шт." },
      { flavor: "Шоколад", quantity: "6 шт." }
    ],
    delivery: "Доставка от 300 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 1500 руб",
    pickup: "Самовывоз бесплатно через два часа после оплаты заказа",
    gift: "Возможность добавить открытку с пожеланием"
  },
  {
    id: 3,
    name: "Круг",
    img: "https://macaronshop.ru/wp-content/uploads/2022/10/podarok-na-den-rojdeniya-3.png",
    imgs: [
      "../../assets/Sherniaz/svg/Circle1.svg",
      "../../assets/Sherniaz/svg/Circle2.svg",
      "../../assets/Sherniaz/svg/Circle3.svg"
    ],
    video: "",
    price: 3500,
    rating: 0,
    description: "50 макаронс в круглой коробке с разнообразными вкусами",
    discount: 0,
    flavors: [
      { flavor: "Малина", quantity: "10 шт." },
      { flavor: "Манго", quantity: "15 шт." },
      { flavor: "Фисташка", quantity: "25 шт." }
    ],
    delivery: "Доставка от 500 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2500 руб",
    pickup: "Самовывоз бесплатно через три часа после оплаты заказа",
    gift: "Можем оформить как подарок в праздничной упаковке"
  },
  {
    id: 4,
    name: "Квадрат",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/deserty-na-zakaz-spb-17.jpg",
    imgs: [
      "../../assets/Sherniaz/svg/Square1.svg",
      "../../assets/Sherniaz/svg/Square2.svg",
      "../../assets/Sherniaz/svg/Square3.svg"
    ],
    video: "",
    price: 2500,
    rating: 0,
    description: "30 макаронс в квадратной коробке с классическими вкусами",
    discount: 0,
    flavors: [
      { flavor: "Ваниль", quantity: "10 шт." },
      { flavor: "Шоколад", quantity: "10 шт." },
      { flavor: "Карамель", quantity: "10 шт." }
    ],
    delivery: "Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2000 руб",
    pickup: "Самовывоз бесплатно через два часа после оплаты заказа",
    gift: "Возможность добавить ленту с надписью"
  },
  {
    id: 5,
    name: "Треугольник",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/podarok-na-svadbu-1.jpg",
    imgs: [
      "../../assets/Sherniaz/svg/Triangle1.svg",
      "../../assets/Sherniaz/svg/Triangle2.svg",
      "../../assets/Sherniaz/svg/Triangle3.svg"
    ],
    video: "",
    price: 2200,
    rating: 0,
    description: "25 макаронс в треугольной коробке с экзотическими вкусами",
    discount: 0,
    flavors: [
      { flavor: "Ананас", quantity: "5 шт." },
      { flavor: "Киви", quantity: "10 шт." },
      { flavor: "Маракуйя", quantity: "10 шт." }
    ],
    delivery: "Доставка от 350 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 1800 руб",
    pickup: "Самовывоз бесплатно через два часа после оплаты заказа",
    gift: "Можем упаковать в подарочную коробку"
  },
  {
    id: 6,
    name: "Пятиугольник",
    img: "https://macaronshop.ru/wp-content/uploads/2024/04/sladkie-podarki-4.png",
    imgs: [
      "../../assets/Sherniaz/svg/Pentagon1.svg",
      "../../assets/Sherniaz/svg/Pentagon2.svg",
      "../../assets/Sherniaz/svg/Pentagon3.svg"
    ],
    video: "",
    price: 3000,
    rating: 0,
    description: "35 макаронс в пятиугольной коробке с премиальными вкусами",
    discount: 0,
    flavors: [
      { flavor: "Черника", quantity: "10 шт." },
      { flavor: "Кофе", quantity: "15 шт." },
      { flavor: "Фундук", quantity: "10 шт." }
    ],
    delivery: "Доставка от 450 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2200 руб",
    pickup: "Самовывоз бесплатно через три часа после оплаты заказа",
    gift: "Можем оформить в подарочную коробку с лентой"
  }
];

export default productsData;
