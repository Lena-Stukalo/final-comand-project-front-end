import { ownerWindow } from '@mui/material';
import EllipsisText from 'react-ellipsis-text';

import {
  TransactionsList,
  TransactionsListItem,
  TransactionCard,
  PropertyList,
  PropertyListItem,
  PropertyListItemWrapper,
  Key,
  Value,
} from './HomeTabList.styled';

const HomeTabList = ({ data }) => {
  return (
    <TransactionsList>
      {data.map(item => (
        <TransactionsListItem key={item._id}>
          <TransactionCard>
            <PropertyList>
              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Date</Key>
                  <Value>{item.date}</Value>
                </PropertyListItemWrapper>
              </PropertyListItem>

              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Type</Key>
                  <Value>{item.isIncome ? '+' : '-'}</Value>
                </PropertyListItemWrapper>
              </PropertyListItem>

              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Category</Key>
                  <Value>{item.category}</Value>
                </PropertyListItemWrapper>
              </PropertyListItem>

              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Comment</Key>

                  <Value>
                    <EllipsisText
                      text={item.comment ? item.comment : 'No comment'}
                      length={20}
                    />
                  </Value>
                </PropertyListItemWrapper>
              </PropertyListItem>

              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Sum</Key>
                  <Value>{item.sum}</Value>
                </PropertyListItemWrapper>
              </PropertyListItem>

              <PropertyListItem isIncome={item.isIncome}>
                <PropertyListItemWrapper>
                  <Key>Balance</Key>
                  <Value>{item.balance}</Value>
                </PropertyListItemWrapper>
              </PropertyListItem>
            </PropertyList>
          </TransactionCard>
        </TransactionsListItem>
      ))}
    </TransactionsList>
  );
};

export default HomeTabList;
