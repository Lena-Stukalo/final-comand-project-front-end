import Media from 'react-media';
import { mediaQueries } from '../../utils';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import sprite from '../../assets/svg/sprite.svg';

const Navigation = () => {
  return (
    <ul className={css.nav}>
      <li className={css.navItem}>
        <NavLink
          exact
          to="/"
          className={css.navLink}
          activeClassName={css.navLinkActive}
        >
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </div>
          <span className={css.navText}>Home</span>
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink
          to="statistics"
          className={css.navLink}
          activeClassName={css.navLinkActive}
        >
          <div className={css.iconWrapper}>
            <svg className={css.svg}>
              <use href={`${sprite}#icon-statistic`}></use>
            </svg>
          </div>
          <span className={css.navText}>Statistics</span>
        </NavLink>
      </li>

      <Media queries={mediaQueries}>
        {matches =>
          (matches.mobile || matches.response) && (
            <li className={css.navItem}>
              <NavLink
                to="currency"
                className={css.navLink}
                activeClassName={css.navLinkActive}
              >
                <div className={css.iconWrapper}>
                  <svg className={css.svg}>
                    <use href={`${sprite}#icon-currency`}></use>
                  </svg>
                </div>
              </NavLink>
            </li>
          )
        }
      </Media>
    </ul>
  );
};

export default Navigation;
