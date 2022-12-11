import { NavLink } from 'react-router-dom';

const FormBtnLink = ({ path, text, style }) => {
  return (
    <NavLink to={path} className={style}>
      {text}
    </NavLink>
  );
};
export default FormBtnLink;
