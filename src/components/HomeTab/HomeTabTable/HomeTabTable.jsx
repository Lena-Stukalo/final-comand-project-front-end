import { useSelector } from 'react-redux';
import AuthSelectors from 'redux/auth/authSelectors';

import EllipsisText from 'react-ellipsis-text';

import {
  Table,
  THead,
  Tr,
  Th,
  Td,
  Container,
  Tbody,
} from './HomeTabTable.styled';

const HomeTabTable = ({ data }) => {
  let bal = useSelector(AuthSelectors.getUserBalance);

  return (
    <Container>
      <Table>
        <THead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <Th>Sum</Th>
            <Th>Balance</Th>
          </Tr>
        </THead>
        <Tbody>
          {data.map((item, index) => {
            return (
              <Tr border key={item._id}>
                <Td>{item.date}</Td>
                <Td>{item.isIncome ? '+' : '-'}</Td>
                <Td>{item.category}</Td>
                <Td>
                  <EllipsisText
                    text={item.comment ? item.comment : 'No comment'}
                    length={20}
                  />
                </Td>
                <Td isIncome={item.isIncome}>{item.sum}</Td>
                <Td>{item.balance}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default HomeTabTable;
