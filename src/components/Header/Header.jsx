import React from 'react';
import Media from 'react-media';

import css from './Header.module.css';

import Logo from 'components/Logo';
import LogoutSvg from './LogoutSvg';

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <nav className={css.nav}>
          <Logo />
          <div className={css.user_nav}>
            <p className={css.user_nav_item}>Name</p>
            <button type="button" className={css.button_exit}>
              <LogoutSvg />
              <Media
                query="(min-width: 768px)"
                render={() => <p className={css.user_nav_item}>Exit</p>}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
