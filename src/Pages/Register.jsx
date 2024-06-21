import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [toast, setToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { firstName, lastName, email, password };

    try {
      const res = await axios.post('https://url-shorten-backend-wpl6.onrender.com/api/auth/register', payload);
      setMsg(res.data.message);
      setToast(true);

      setTimeout(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      }, 1000);
    } catch (error) {
      setMsg(error.response?.data?.message || 'Registration failed');
      setToast(true);
    }
  };

  return (
    <div>
      <div className="title">Register</div>
      <div className="card-center m-3">
        <div className="card card-format text-center">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="row-cols-sm-2">
                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                  First Name:
                </label>
                <input
                  className='border-black'
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                /><br />
                
                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                  Last Name:
                </label>
                <input
                  className='border-black'
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                /><br />
                
                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                  Email:
                </label>
                <input
                  className='border-black'
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                /><br />
                
                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                  Password:
                </label>
                <input
                  className='border-black'
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /><br /><br />
              </div>
            </div>
            <button className='btn' type='submit'>
              Register
            </button>
            {toast && (
              <div className="toast-container position-fixed top-0 end-0 p-3">
                <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body fw-bolder w-100 text-bg-info">
                      {msg}
                    </div>
                    <div className="toast-header">
                      <button
                        type="button"
                        className="btn-close me-2 m-auto"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                        onClick={() => setToast(false)}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
