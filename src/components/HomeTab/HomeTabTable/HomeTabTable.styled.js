import styled from 'styled-components';

const sumColor = p => {
  if (p.isIncome === undefined) {
    return '#000000';
  } else if (p.isIncome) {
    return '#24CCA7';
  } else {
    return '#FF6596';
  }
};

export const Table = styled.table`
  width: 704px;

  border-collapse: collapse;
  table-layout: fixed;

  @media (min-width: 1280px) {
    width: 715px;
  }
`;

export const THead = styled.thead`
  /* display: flex;
  flex-direction: column;

  width: 704px; */
`;

export const Tr = styled.tr`
  border-bottom: ${p => p.border && '1px #DCDCDF solid'};
`;

export const Th = styled.th`
  background-color: white;
  font-size: 18px;
  line-height: 27px;

  /* padding: 16px 20px 15px 20px; */

  padding-top: 16px;
  padding-bottom: 15px;
  :first-child {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  :last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const Td = styled.td`
  text-align: center;

  color: ${p => sumColor(p)};

  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 16px;
  line-height: 24px;
`;
