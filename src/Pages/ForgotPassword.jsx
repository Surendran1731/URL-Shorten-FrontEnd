import axios from 'axios';
import React, { useState } from 'react';

const ForgotPassword = () => {
const [email,setemail]=useState('');
const [msg,setmsg]=useState('');
const [toast,settoast]=useState(false)


const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={email}
    await axios.post('https://url-shorten-backend-wpl6.onrender.com/api/auth/forgot-password',payload)
    .then(res=>{setmsg(res.data.message)
        settoast(true)

            setpassword('');
    })
    .catch(err=>{
        setmsg(err.response.data.message);
settoast(true)

    })


}

    return (
        <div>
            <h1 className='title'>Forgot Password</h1>
            <div className="card-center m-3">
                <div className="card card-format text-center">

                <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="row-cols-sm-2">
                <label className='col-12 col-sm-4 p-2 text-sm-end'>
                    Email:
                </label>
                <input className='border-black' required type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br />
<br />
                </div>
            </div>
                <button className="btn" type='submit' >
                    Verify
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

export default ForgotPassword;