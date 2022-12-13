import React from 'react';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';

import css from './Header.module.css';

import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import { getIsModalLogoutOpen } from 'redux/selectors';
import AuthSelectors from 'redux/auth/authSelectors';
import { toggleModal } from 'redux/data/globalSlice';

import Logo from 'components/Logo';
import LogoutSvg from './LogoutSvg';

const Header = () => {
  const dispatch = useDispatch();

  const isModalLogoutOpen = useSelector(getIsModalLogoutOpen);
  const userName = useSelector(AuthSelectors.getUserName);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Logo path="/home" />
          <div className={css.user_nav}>
            <p className={css.user_nav_item}>{userName}</p>
            <button
              type="button"
              className={css.button_exit}
              onClick={() => {
                dispatch(toggleModal());
              }}
            >
              <LogoutSvg />
              <Media
                query="(min-width: 768px)"
                render={() => <p className={`${css.exit_nav_item}`}>Exit</p>}
              />
            </button>
          </div>
        </nav>
      </div>
      {isModalLogoutOpen && (
        <ModalLogout
          closeModal={() => {
            dispatch(toggleModal());
          }}
        />
      )}
    </header>
  );
};

export default Header;
