import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({login}) => {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const [toast,settoast]=useState(false)
const navig=useNavigate()
const handlePassword=async (e)=>{
    navig('/forgot-password')   
    
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={email,password}
    await axios.post('https://url-shorten-backend-wpl6.onrender.com/api/auth/login',payload)
    .then(res=>{setmsg('Login successfully')
        localStorage.setItem('token', res.data.token);
settoast(true)
        setTimeout(() => {
            navig('/shortingurl');
            login();
        }, 1000);
            setemail('');
            setpassword('');
    })
    .catch(err=>{
        setmsg(err.response.data.message);
settoast(true)

    })


}

    return (
        <div>
            <h1 className='title'>Login</h1>
      <div className="card-center m-3">
      <div className="card card-format  text-center">
        <form onSubmit={handleSubmit}>
              <div className="row">
             <div className="row-cols-sm-2">
<br />
             <label className='col-12 col-sm-4 p-2 text-sm-end'>
                    Email:
                </label>
                <input className='border-black' type="email"  name="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br />
<br />
                <label className='col-12 col-sm-4 p-2 text-sm-end'>
                    Password:
                </label>
                <input type="password" className='border-black' name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
<br /><br /> </div>
</div>
                <button type='submit' className='btn' >
                    Login
                </button><br />
                <button onClick={handlePassword} className='btn' >
                    Forgot Password
                </button>
                {toast && (
                        <div className="toast-container position-fixed top-0 end-0 p-3" >
                            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                              
                            <div className="d-flex">
                            <div className="toast-body fw-bolder w-100  text-bg-info">
                                    {msg}
                                </div>
                            
                                <div className="toast-header  ">
                                    
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={()=>settoast(false)}></button>
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

export default Login;