import Media from 'react-media';

// import ccs from './HomeTab.module.css';

import HomeTabList from './HomeTabList/HomeTabList';
import HomeTabTable from './HomeTabTable/HomeTabTable';

const HomeTab = ({ data }) => {
  console.log(data);
  return (
    <>
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
    </>
  );
};

export default HomeTab;
