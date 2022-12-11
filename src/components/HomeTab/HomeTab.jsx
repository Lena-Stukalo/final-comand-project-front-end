import Media from 'react-media';

// import ccs from './HomeTab.module.css';

import HomeTabList from './HomeTabList/HomeTabList';
import HomeTabTable from './HomeTabTable/HomeTabTable';

const HomeTab = ({ data }) => {
  const regExNoDots = /[^\d]/g;

  const filteredData = data.sort(
    (firstEl, secondEl) =>
      secondEl.date.replace(regExNoDots, '') -
      firstEl.date.replace(regExNoDots, '')
  );

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
              <HomeTabList data={filteredData} />
            ) : (
              <HomeTabTable data={filteredData} />
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default HomeTab;
