import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  statisticsColors,
  switchersOptions,
} from 'transactionsComponentConstants/constants';
import { AiOutlineDown } from 'react-icons/ai';

function CategoriesDropbox({ select }) {
  const [selectOpened, setSelectOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select a category');
  const [selected, setSelected] = useState(false);

  const array = statisticsColors.filter(
    e => switchersOptions.transactionsTypeIncome !== e['category']
  );

  const handleChange = e => {
    setSelectedOption(e);
    if (!selected) {
      setSelected(true);
    }
    select(e);
  };

  const style = {
    position: 'relative',
    right: '0',
    marginRight: '30px',
    width: '18px',
    height: '9px',
  };

  return (
    <Div>
      <Wrapper>
        <H2 select={selected}>{selectedOption}</H2>
        <button
          type="button"
          onClick={() => setSelectOpened(prevCheck => !prevCheck)}
        >
          <AiOutlineDown style={style} />
        </button>
      </Wrapper>
      {selectOpened && (
        <Ul onClick={e => handleChange(e.target.textContent)}>
          {array.map(({ category }) => (
            <Li key={category}>{category.split('')[0] + category.slice(1)}</Li>
          ))}
        </Ul>
      )}
    </Div>
  );
}

CategoriesDropbox.propTypes = {
  select: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Circe, Manrope, sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  button {
    border: none;
    background: none;
  }
`;
const Div = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 0 20px;
`;
const H2 = styled.h2`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: ${p => (p.select ? '#000000' : '#bdbdbd')};
`;
const Ul = styled.ul`
  position: absolute;
  z-index: 1000;
  left: 0;
  width: 100%;
  height: 352px;
  margin-top: 4px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  overflow-y: auto;
`;
const Li = styled.li`
  height: 44px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
font-family: 'Circe, Manrope, sans-serif';
font-style: normal;
font-weight: 400;
font-size: 18px;
 line-height: 1.5;
  &:hover,
  &:focus {
    font-weight: 700;
    color: #ff6596;
    background: #ffffff;
    cursor: pointer;

`;

export default CategoriesDropbox;
