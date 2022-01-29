//Here we can store our context logic(main logic) -> context can be used to store logic so that root component don't get sucked by these logics

import React, { useReducer } from 'react';
import CartContext from './cart-context';

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
  {
    item: 'French fries',
    description: 'Crunchy fries with tomato sauce and much more',
    cost: 3.02,
  },
];

const itemsBoughtReducer = function (prevState, action) {
  const repeatOrderCondition = action.type === 'Repeat order';

  return [
    repeatOrderCondition
      ? prevState.filter(el => el.items[0].item !== action.itemId)
      : prevState,
    {
      items: itemsPresent.filter(item => item.item === action.itemId),
      times: repeatOrderCondition
        ? prevState.find(el => el.items[0].item === action.itemId).times + 1
        : action.itemTimes,
    },
  ].flat();
};

const CartProvider = function (props) {
  const [itemsBought, dispatchItemsBoughtAction] = useReducer(
    itemsBoughtReducer,
    []
  );

  const itemsBoughtHandler = function (itemId, itemTime) {
    const itemTimes = itemTime || 1;

    const isMatching = itemsBought.some(el => el.items[0].item === itemId);

    dispatchItemsBoughtAction({
      type: isMatching ? 'Repeat order' : 'Add new item',
      itemId,
      itemTimes,
    });
  };

  const totalCost = itemsBought
    .reduce((counter, item) => item.items[0].cost * item.times + counter, 0)
    .toFixed(2);

  const contextValue = {
    itemsAvailable: itemsPresent,
    itemsInCart: itemsBought,
    totalAmount: totalCost,
    addItems: itemsBoughtHandler,
    removeItem: () => {},
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
