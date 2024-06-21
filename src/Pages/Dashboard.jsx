import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({
    urlsToday: 0,
    urlsThisMonth: 0,
    topUrls: []
  });
  const [msg, setMsg] = useState('');
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token'); // Get token from local storage
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token,  // Include token in Authorization header
      };

      try {
        const res = await axios.get('https://url-shorten-backend-wpl6.onrender.com/api/dashboard/data', { headers });
        setData(res.data);
      } catch (err) {
        setMsg(err.response?.data || 'Error fetching dashboard data');
        setToast(true);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h1 className='title'>Dashboard</h1>
      <div className="card-center m-3">
        <div className="card card-format text-center">
          <div className="card-body">
            <h5 className="card-title">URLs Created Today</h5>
            <p className="card-text">{data.urlsToday}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">URLs Created This Month</h5>
            <p className="card-text">{data.urlsThisMonth}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Top 10 URLs by Click Count</h5>
            <ul className="list-group">
              {data.topUrls.map((url, index) => (
                <li key={index} className="list-group-item">
                 <a href={url.originalUrl}>{url.originalUrl}</a>  - {url.clickCount} clicks
                </li>
              ))}
            </ul>
          </div>
          {toast && (
            <div className="toast-container position-fixed top-0 end-0 p-3">
              <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body fw-bolder w-100 text-bg-info">
                    {msg}
                  </div>
                  <div className="toast-header">
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setToast(false)}></button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
