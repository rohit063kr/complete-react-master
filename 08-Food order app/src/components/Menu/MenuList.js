import React, { useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ListItems from '../UI/ListItems';

import styles from './MenuList.module.scss';

const MenuList = function (props) {
  const timesInputRef = useRef();

  const itemBoughtHandler = function (e) {
    props.onItemBought(
      e.target.closest('.' + styles['menu__list-item']).dataset.id,
      +timesInputRef.current.value
    );
  };

  return (
    <Card className={styles['menu__list']}>
      {props.items.map(item => (
        <ListItems
          key={item.item}
          className={styles['menu__list-item']}
          data-id={item.item}
        >
          <div className={styles['menu__item']}>
            <p className={styles['menu__item-name']}>{item.item}</p>
            <p className={styles['menu__item-discription']}>
              {item.description}
            </p>
            <p className={styles['menu__item-cost']}>$ {item.cost}</p>
          </div>
          <div className={styles['menu__item-config']}>
            <div className={styles['menu__item-times']}>
              <label>Quantity:</label>
              <input ref={timesInputRef} type="number" />
            </div>
            <Button
              type="button"
              className={styles['menu__btn']}
              onClick={itemBoughtHandler}
            >
              +Add
            </Button>
          </div>
        </ListItems>
      ))}
    </Card>
  );
};

export default MenuList;
