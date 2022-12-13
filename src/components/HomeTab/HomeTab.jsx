import Media from 'react-media';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import ccs from './HomeTab.module.css';

import HomeTabList from './HomeTabList/HomeTabList';
import HomeTabTable from './HomeTabTable/HomeTabTable';

import TransSelectors from 'redux/transactions/transactionSelector';
import Spinner from 'components/Spinner/Spinner';

const HomeTab = ({ data }) => {
  const isLoading = useSelector(TransSelectors.getIsLoading);

  const regExNoDots = /[^\d]/g;

  // const dataToSotr = [...data];
  // // if (data.length === 0) {
  // //   return <>nodata</>;
  // // }

  // const filteredData = dataToSotr.sort(
  //   (firstEl, secondEl) =>
  //     secondEl.date.replace(regExNoDots, '') -
  //     firstEl.date.replace(regExNoDots, '')
  // );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.length === 0 ? (
            <Container>Unfortunately you don’t have any transactions</Container>
          ) : (
            <Media
              queries={{
                medium: '(min-width: 768px)',
              }}
            >
              {matches => (
                <>
                  {!matches.medium ? (
                    <HomeTabList data={data} />
                  ) : (
                    <HomeTabTable data={data} />
                  )}
                </>
              )}
            </Media>
          )}
        </>
      )}
    </>
  );
};

export default HomeTab;

const Container = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 30px;
  }
`;
