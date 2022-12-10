import Media from 'react-media';

// import ccs from './HomeTab.module.css';

import HomeTabList from './HomeTabList/HomeTabList';

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
            {!matches.medium ? <HomeTabList data={data} /> : <p>Not phone</p>}
          </>
        )}
      </Media>
    </>
  );
};

export default HomeTab;
