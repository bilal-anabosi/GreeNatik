import React from 'react';

const Table = ({data}) => {
return (

<div className ="container-fluid">
<div className="row">
  <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
    <div className="card h-100 card-lg">
      {/* heading */}
      <div className="p-6">
        <h3 className="mb-0 fs-5">Global Ranking</h3>
      </div>
      <div className="card-body p-0">
        {/* table */}
        <div className="table-responsive">
          <table className="table table-centered table-borderless text-nowrap table-hover">
            <thead className="bg-light">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">User Name</th>
                <th scope="col">City</th>
                <th scope="col">Tasks</th>
                <th scope="col">Points</th>
                <th scope="col">Total Points</th>
              </tr>
            </thead>
            <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.userName}</td>
                      <td>{item.city}</td>
                      <td>{item.tasks}</td>
                      <td>{item.points}</td>
                      <td>{item.totalPoints}</td>
                    </tr>
                  ))}
                </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" color='#333333CC' fill="currentColor" class="bi bi-exclamation-circle-fill"  viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg> 
                <span className="t-text">
                You might not see the real-time changes
                </span>
</div>
    </div>
    <br/>
    </div>
);
};

export default Table;