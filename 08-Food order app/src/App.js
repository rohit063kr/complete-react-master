import React, { useState } from 'react';

import Menu from './components/Menu/Menu';
import Navigation from './components/Navigation/Navigation';

const itemsPresent = [
  {
    item: 'Pizza',
    description: 'Delicious pizza with non-veg ingredients',
    cost: 23.02,
  },
  {
    item: 'Burger',
    description: 'Burger full of cheese slices',
    cost: 13.02,
  },
  {
    item: 'Suzzi',
    description: 'Best chinese food of our resturant',
    cost: 41.06,
  },
  {
    item: 'Pasta',
    description: 'One of the best serving present in our resturant',
    cost: 7,
  },
  { item: 'French fries', description: 'Crunchy fries', cost: 3.02 },
];

const INITIAL_DATA = [];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsBought, setItemsBought] = useState(INITIAL_DATA);

  const data = { itemsPresent, itemsBought };

  const itemsBoughtHandler = function (itemId, itemTimes) {
    itemTimes = itemTimes || 1;

    const isMatching = itemsBought.some(el => el.items[0].item === itemId);

    setItemsBought(prevState => {
      if (isMatching)
        return [
          ...prevState.filter(el => el.items[0].item !== itemId),
          {
            items: itemsPresent.filter(item => item.item === itemId),
            times: prevState.find(el => el.items[0].item === itemId).times + 1,
          },
        ];

      return [
        ...prevState,
        {
          items: itemsPresent.filter(item => item.item === itemId),
          times: itemTimes,
        },
      ];
    });
  };

  const modalCloseHandler = function () {
    setIsModalOpen(false);
  };

  const modalOpenHandler = function () {
    setIsModalOpen(true);
  };

  return (
    <React.Fragment>
      <Navigation
        onModalOpen={modalOpenHandler}
        onModalClose={modalCloseHandler}
        purchasedItems={itemsBought.length}
        items={data}
        modalStatus={isModalOpen}
      />
      <Menu onBuy={itemsBoughtHandler} itemsData={data} />
    </React.Fragment>
  );
}

export default App;
