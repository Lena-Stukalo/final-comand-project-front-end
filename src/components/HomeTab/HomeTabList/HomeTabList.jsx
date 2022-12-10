const HomeTabList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <div>
            <ul>
              <li>
                <div>
                  <p>Date</p>
                  <p>{item.date}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Type</p>
                  <p>{item.isIncome ? '+' : '-'}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Category</p>
                  <p>{item.category}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Comment</p>
                  <p>{item.comment ? item.comment : 'No comment'}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Sum</p>
                  <p>{item.sum}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Balance</p>
                  <p>{item.balance}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeTabList;
