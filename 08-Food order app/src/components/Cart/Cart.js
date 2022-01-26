import React from 'react';

import styles from './Cart.module.scss';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ListItems from '../UI/ListItems';

const Cart = function (props) {
  const itemsBought = props.itemsData.itemsBought;

  return (
    <React.Fragment>
      {props.modalStatus && (
        <div className={styles['cart']}>
          <div
            className={styles['cart__overlay']}
            onClick={props.onModalClose}
          ></div>
          <Card className={styles['cart__card']}>
            <Button
              className={styles['cart__cancel']}
              onClick={props.onModalClose}
            >
              X
            </Button>
            <h2 className={styles['cart__heading']}>Your Items</h2>
            <div className={styles['cart__items']}>
              {itemsBought.length
                ? itemsBought.map(el => (
                    <ListItems
                      keys={el.items[0].item}
                      className={styles['cart__item']}
                    >
                      <span className={styles['cart__item-name']}>
                        {el.items[0].item}
                        {el.times > 1 && (
                          <Button type="button" className={styles['cart__btn']}>
                            {' x ' + el.times}
                          </Button>
                        )}
                      </span>
                      <span className={styles['cart__item-cost']}>
                        $ {el.items[0].cost * el.times}
                      </span>
                      <div className={styles['cart__item-btn']}>
                        <Button type="button">-</Button>
                      </div>
                    </ListItems>
                  ))
                : 'You did not placed any order yet'}

              <div
                className={`${styles['cart__total']} ${styles['cart__item']}`}
              >
                <span className={styles['cart__total-heading']}>Total</span>
                <span className={styles['cart__totla-amount']}>
                  {itemsBought
                    .reduce(
                      (counter, item) =>
                        item.items[0].cost * item.times + counter,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
