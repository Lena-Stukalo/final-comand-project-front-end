import styled from 'styled-components';

export const TransactionsList = styled.ul`
  width: 280px;

  margin-top: 32px;

  max-height: 80vw;
  overflow-y: scroll;
`;

export const TransactionsListItem = styled.li`
  margin-bottom: 8px;

  border-radius: 10px;
  background-color: #dcdcdf;
`;

export const TransactionCard = styled.div`
  border-radius: 10px;
`;

export const PropertyList = styled.ul``;

export const PropertyListItem = styled.li`
  background: linear-gradient(
    to right,
    ${p => (p.isIncome ? '#24CCA7' : '#FF6596')} 5px,
    white 1px
  );
  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  :not(:last-child) {
    margin-bottom: 1px;
  }
`;

export const PropertyListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 12px;
  padding-bottom: 8px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Key = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const Value = styled.p`
  font-size: 16px;
  line-height: 24px;
`;
