import React from 'react';
import ReactDom from 'react-dom';

import Cart from '../Cart/Cart';

import styles from './Navigation.module.scss';

const Navigation = function (props) {
  return (
    <React.Fragment>
      {props.modalStatus &&
        ReactDom.createPortal(
          <Cart
            onModalClose={props.onModalClose}
            itemsData={props.items}
            modalStatus={props.modalStatus}
          />,
          document.getElementById('cart-root')
        )}
      <div className={styles['navigation']}>
        <h2 className={styles['navigation__logo']}>Order food</h2>
        <ul className={styles['navigation__list']}>
          <li className={styles['navigation__list-item']}>
            <a href="#" className={styles['navigation__link']}>
              Home
            </a>
          </li>
          <li className={styles['navigation__list-item']}>
            <a href="#" className={styles['navigation__link']}>
              Any
            </a>
          </li>
          <li className={styles['navigation__list-item']}>
            <a
              href="#"
              className={`${styles['navigation__link']} ${styles['navigation__cart']}`}
              onClick={props.onModalOpen}
            >
              Cart <span>{props.purchasedItems}</span>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
